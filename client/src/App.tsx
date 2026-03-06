import { useCallback, useEffect, useMemo, useState } from "react";

import { Global } from "@emotion/react";

import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";

import {
  DayCell,
  DayHeader,
  DayHeaderRow,
  DayNumber,
  FullScreenContainer,
  Grid,
  HolidayLabel,
  TaskNumber,
  TaskScrollContainer,
} from "./components/CalendarStyles.js";

import { Header } from "./components/Header.js";
import { TaskItem } from "./components/TaskItem";
import { TaskModal } from "./components/TaskModal";
import { translations } from "./locales/translations.js";

import { createTask, deleteTask, getTasks, updateTask } from "./api/taskApi";
import { defaultDate, globalStyles } from "./constants/constants.js";
import { generateCalendarDays, getCardLabel } from "./utils/calendarUtils";

import { useAuth } from "./context/AuthContext.js";

import AuthModal from "./components/AuthModal.js";

import type { TaskType } from "@shared/task.interface.js";
import type { Holiday } from "./types/calendar.types.js";

function App() {
  const [viewDate, setViewDate] = useState(defaultDate);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const { language, user, openAuthModal } = useAuth();

  const weekDays = useMemo(() => translations[language].weekDays, [language]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const countryCode = language === "uk" ? "UA" : "US";
        const response = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${viewDate.getFullYear()}/${countryCode}`,
        );
        setHolidays(await response.json());
      } catch (e) {
        console.error("Error loading holidays:", e);
      }
    };
    fetchHolidays();
  }, [viewDate, language]);

  const fetchTasks = useCallback(async () => {
    try {
      if (user) {
        setTasks(await getTasks());
      }
    } catch (e) {
      console.error("Error fetching tasks:", e);
    }
  }, [user]);

  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchTasks();
      } else {
        setTasks([]);
      }
    };

    load();
  }, [fetchTasks, user]);

  const days = useMemo(
    () => generateCalendarDays(viewDate, tasks, holidays, searchQuery),
    [viewDate, tasks, searchQuery, holidays],
  );

  const handleSaveTask = async () => {
    if (!taskTitle || !selectedDate) return;
    try {
      if (editingTask?._id) {
        await updateTask(editingTask._id, {
          title: taskTitle,
          labels: selectedLabels,
        });
      } else {
        await createTask({
          title: taskTitle,
          date: selectedDate,
          labels: selectedLabels,
        });
      }
      await fetchTasks();
      closeModal();
    } catch (error) {
      console.error("Save error:", error);
      alert(translations[language].saveError);
    }
  };

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    setIsDragging(false);

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const newDateString = destination.droppableId;
    const newIndex = destination.index;

    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        if (t._id === draggableId) {
          return { ...t, date: newDateString, order: newIndex };
        }
        return t;
      });
    });

    try {
      await updateTask(draggableId, {
        date: new Date(newDateString),
        order: newIndex,
      });
    } catch (error) {
      console.error("Move error:", error);
      fetchTasks();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
    setTaskTitle("");
    setSelectedLabels([]);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <FullScreenContainer>
        <Header
          viewDate={viewDate}
          setViewDate={setViewDate}
          language={language}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          translations={translations[language]}
          filteredResults={tasks.filter((t) =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )}
          handlePrevMonth={() =>
            setViewDate(
              new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1),
            )
          }
          handleNextMonth={() =>
            setViewDate(
              new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1),
            )
          }
          goToTask={(t) => {
            setViewDate(
              new Date(
                new Date(t.date).getFullYear(),
                new Date(t.date).getMonth(),
                1,
              ),
            );
            setSearchQuery("");
          }}
        />

        <DragDropContext
          onDragStart={() => setIsDragging(true)}
          onDragEnd={onDragEnd}
        >
          <Grid>
            {weekDays.map((d) => (
              <DayHeader key={d}>{d}</DayHeader>
            ))}
            {days.map((day) => (
              <Droppable
                droppableId={day.date.toISOString()}
                key={day.date.toISOString()}
              >
                {(provided) => (
                  <DayCell
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isCurrentMonth={day.isCurrentMonth}
                    onClick={() => {
                      if (isDragging) return;
                      setSelectedDate(day.date);
                      setIsModalOpen(true);
                    }}
                  >
                    <DayHeaderRow>
                      <DayNumber>{day.date.getDate()}</DayNumber>
                      {day.dayTasks.length > 0 && (
                        <TaskNumber>
                          {day.dayTasks.length}{" "}
                          {getCardLabel(day.dayTasks.length, language)}
                        </TaskNumber>
                      )}
                    </DayHeaderRow>
                    <TaskScrollContainer>
                      {day.dayHolidays.map((h, idx) => (
                        <HolidayLabel key={`${h.name}-${idx}`}>
                          {h.localName}
                        </HolidayLabel>
                      ))}
                      {day.dayTasks.map((task, idx) => (
                        <Draggable
                          key={task._id}
                          draggableId={task._id!}
                          index={idx}
                        >
                          {(prov) => (
                            <div
                              ref={prov.innerRef}
                              {...prov.draggableProps}
                              {...prov.dragHandleProps}
                            >
                              <TaskItem
                                task={task}
                                onDelete={async (e, id) => {
                                  e.stopPropagation();
                                  if (
                                    window.confirm(
                                      translations[language].confirmDelete,
                                    )
                                  ) {
                                    await deleteTask(id);
                                    fetchTasks();
                                  }
                                }}
                                onEdit={(e, t) => {
                                  e.stopPropagation();
                                  setEditingTask(t);
                                  setTaskTitle(t.title);
                                  setSelectedDate(new Date(t.date));
                                  setSelectedLabels(t.labels || []);
                                  setIsModalOpen(true);
                                }}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </TaskScrollContainer>
                  </DayCell>
                )}
              </Droppable>
            ))}
          </Grid>
        </DragDropContext>
      </FullScreenContainer>
      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveTask}
        title={taskTitle}
        setTitle={setTaskTitle}
        date={selectedDate}
        language={language}
        translations={translations[language]}
        selectedLabels={selectedLabels}
        setSelectedLabels={setSelectedLabels}
        user={user}
        onOpenAuth={() => {
          closeModal();
          openAuthModal();
        }}
      />
      <AuthModal translations={translations[language]} />
    </>
  );
}

export default App;
