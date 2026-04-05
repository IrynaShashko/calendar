import { useCallback, useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showConfirmToast } from "./components/ConfirmToast";

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
  TaskDot,
  TaskDotsRow,
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

import { useIsMobile } from "./utils/useIsMobile.js";

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
  const [taskModalMode, setTaskModalMode] = useState<"form" | "day-tasks">(
    "form",
  );

  const isMobile = useIsMobile(768);
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

  const selectedDayData = useMemo(() => {
    if (!selectedDate) return null;

    return (
      days.find(
        (day) => day.date.toDateString() === selectedDate.toDateString(),
      ) ?? null
    );
  }, [days, selectedDate]);

  const selectedDayTasks = selectedDayData?.dayTasks ?? [];
  const selectedDayHolidays = selectedDayData?.dayHolidays ?? [];

  const openDayModal = (
    date: Date,
    dayTasks: TaskType[],
    dayHolidays: Holiday[],
  ) => {
    if (isDragging) return;

    setSelectedDate(date);
    setEditingTask(null);
    setTaskTitle("");
    setSelectedLabels([]);
    setTaskModalMode(
      isMobile && (dayTasks.length > 0 || dayHolidays.length > 0)
        ? "day-tasks"
        : "form",
    );
    setIsModalOpen(true);
  };

  const openTaskEditor = (task: TaskType) => {
    setEditingTask(task);
    setTaskTitle(task.title);
    setSelectedDate(new Date(task.date));
    setSelectedLabels(task.labels || []);
    setTaskModalMode("form");
    setIsModalOpen(true);
  };

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
    setTaskModalMode("form");
  };

  const goToTask = (task: TaskType) => {
    const taskDate = new Date(task.date);

    setViewDate(new Date(taskDate.getFullYear(), taskDate.getMonth(), 1));
    setSearchQuery("");

    if (!isMobile) return;

    setSelectedDate(taskDate);
    setEditingTask(null);
    setTaskTitle("");
    setSelectedLabels([]);
    setTaskModalMode("day-tasks");
    setIsModalOpen(true);
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
          goToTask={goToTask}
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
                    isToday={
                      day.date.toDateString() === new Date().toDateString()
                    }
                    onClick={() =>
                      openDayModal(day.date, day.dayTasks, day.dayHolidays)
                    }
                  >
                    <DayHeaderRow>
                      <DayNumber
                        isToday={
                          day.date.toDateString() === new Date().toDateString()
                        }
                      >
                        {day.date.getDate()}
                      </DayNumber>
                      {!isMobile && day.dayTasks.length > 0 && (
                        <TaskNumber>
                          {day.dayTasks.length}
                          {getCardLabel(day.dayTasks.length, language)}
                        </TaskNumber>
                      )}
                    </DayHeaderRow>
                    {isMobile &&
                      (day.dayTasks.length > 0 ||
                        day.dayHolidays.length > 0) && (
                        <TaskDotsRow
                          aria-label={`${day.dayTasks.length} tasks${day.dayHolidays.length ? ` and ${day.dayHolidays.length} holidays` : ""}`}
                        >
                          {day.dayHolidays.length > 0 && (
                            <TaskDot color="#B86C6D" />
                          )}
                          {day.dayTasks.map((task, idx) => (
                            <TaskDot
                              key={task._id || `${task.title}-${idx}`}
                              color={task.labels?.[0]}
                            />
                          ))}
                        </TaskDotsRow>
                      )}
                    <TaskScrollContainer>
                      {!isMobile &&
                        day.dayHolidays.map((h, idx) => (
                          <HolidayLabel key={`${h.name}-${idx}`}>
                            {h.localName}
                          </HolidayLabel>
                        ))}
                      {!isMobile &&
                        day.dayTasks.map((task, idx) => (
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
                                    showConfirmToast(
                                      translations[language].confirmDelete,
                                      async () => {
                                        await deleteTask(id);
                                        await fetchTasks();
                                        toast.success(
                                          translations[language].taskDeleted ||
                                            "Task deleted!",
                                        );
                                      },
                                    );
                                  }}
                                  onEdit={(e, t) => {
                                    e.stopPropagation();
                                    openTaskEditor(t);
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
        mode={taskModalMode}
        dayTasks={taskModalMode === "day-tasks" ? selectedDayTasks : undefined}
        dayHolidays={
          taskModalMode === "day-tasks" ? selectedDayHolidays : undefined
        }
        onAddNew={() => {
          setTaskModalMode("form");
          setEditingTask(null);
          setTaskTitle("");
          setSelectedLabels([]);
        }}
        onEditTask={(task) => openTaskEditor(task)}
        onDeleteTask={async (taskId) => {
          showConfirmToast(translations[language].confirmDelete, async () => {
            await deleteTask(taskId);
            await fetchTasks();
            toast.success(
              translations[language].taskDeleted || "Task deleted!",
            );
          });
        }}
      />
      <AuthModal translations={translations[language]} />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;
