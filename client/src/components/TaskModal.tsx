import {
  CalendarDays,
  LogIn,
  PartyPopper,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";

import { labelPalette } from "src/constants/constants.js";

import {
  Button,
  CloseButton,
  HolidayLabel,
  LabelBar,
  LabelBarContainer,
  LabelPill,
  LabelsGrid,
  LabelsSection,
  LabelsTitle,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SubmitButton,
  TextArea,
} from "./CalendarStyles.js";

import type { TaskModalProps } from "../types/calendar.types.js";

export const TaskModal = ({
  isOpen,
  onClose,
  onSave,
  title,
  setTitle,
  date,
  translations,
  language,
  selectedLabels,
  setSelectedLabels,
  user,
  onOpenAuth,
  dayTasks = [],
  dayHolidays = [],
  mode = "form",
  onAddNew,
  onEditTask,
  onDeleteTask,
}: TaskModalProps) => {
  if (!isOpen) return null;

  const MAX_LABELS = 1;

  const toggleLabel = (color: string) => {
    const isAlreadySelected = selectedLabels.includes(color);

    if (isAlreadySelected) {
      setSelectedLabels(selectedLabels.filter((c) => c !== color));
    } else if (selectedLabels.length < MAX_LABELS) {
      setSelectedLabels([...selectedLabels, color]);
    }
  };

  const formattedDate = date?.toLocaleDateString(
    language === "uk" ? "uk-UA" : "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  );

  const closeLabel = language === "uk" ? "Закрити" : "Close";
  const addTaskLabel = language === "uk" ? "Додати задачу" : "Add task";
  const holidaysLabel = language === "uk" ? "Свята" : "Holidays";
  const emptyDayLabel =
    language === "uk"
      ? "На цей день ще немає задач, але можна додати нову нижче"
      : "No tasks for this day yet, but you can add one below";
  // Ukrainian pluralization for tasks and holidays
  const getUkrainianTaskLabel = (count: number) => {
    if (count === 1) return "завдання";
    if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100))
      return "завдання";
    return "завдань";
  };
  const getUkrainianHolidayLabel = (count: number) => {
    if (count === 1) return "свято";
    if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100))
      return "свята";
    return "свят";
  };

  const tasksCountLabel =
    language === "uk"
      ? `${dayTasks.length} ${getUkrainianTaskLabel(dayTasks.length)}${dayHolidays.length ? ` • ${dayHolidays.length} ${getUkrainianHolidayLabel(dayHolidays.length)}` : ""}`
      : `${dayTasks.length} task${dayTasks.length === 1 ? "" : "s"}${dayHolidays.length ? ` • ${dayHolidays.length} holiday${dayHolidays.length === 1 ? "" : "s"}` : ""}`;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton
          type="button"
          aria-label={closeLabel}
          onClick={onClose}
          style={{ top: 14, right: 16 }}
        >
          <X size={18} />
        </CloseButton>

        {!user ? (
          <div style={{ textAlign: "center", padding: "20px 8px" }}>
            <h2>{translations.authRequiredTitle}</h2>
            <p>{translations.authRequiredDesc}</p>
            <SubmitButton onClick={onOpenAuth} style={{ marginTop: "20px" }}>
              <LogIn size={16} />
              {translations.login}
            </SubmitButton>
          </div>
        ) : mode === "day-tasks" ? (
          <>
            <h3
              style={{
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                fontSize: 16,
                gap: 8,
              }}
            >
              <CalendarDays size={18} />
              {translations.taskFor} {formattedDate}
            </h3>
            <p style={{ margin: "0 0 16px", color: "#5e6c84", fontSize: 13 }}>
              {tasksCountLabel}
            </p>

            {dayHolidays.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div
                  style={{
                    marginBottom: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    // background: "rgba(192, 132, 151, 0.25)",
                    borderColor: "#A36A7E",
                    color: "#A36A7E",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <PartyPopper size={14} />
                    {holidaysLabel}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {dayHolidays.map((holiday, index) => (
                    <HolidayLabel
                      key={`${holiday.name}-${index}`}
                      style={{
                        backgroundColor: "rgba(192, 132, 151, 0.25)",
                        borderColor: "#A36A7E",
                        color: "#A36A7E",
                      }}
                    >
                      {holiday.localName}
                    </HolidayLabel>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 16,
              }}
            >
              {dayTasks.length === 0 ? (
                <div
                  style={{
                    padding: "14px 12px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.85)",
                    color: "#5e6c84",
                    textAlign: "center",
                  }}
                >
                  {emptyDayLabel}
                </div>
              ) : (
                dayTasks.map((task) => (
                  <div
                    key={task._id}
                    onClick={() => onEditTask?.(task)}
                    style={{
                      padding: 0,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.92)",
                      border: "1px solid #d8dee4",
                      boxShadow: "0 6px 18px rgba(15, 23, 42, 0.06)",
                      cursor: "pointer",
                      overflow: "hidden",
                      marginBottom: 10,
                    }}
                  >
                    {task.labels?.length ? (
                      <LabelBarContainer>
                        <LabelBar color={task.labels[0]} />
                      </LabelBarContainer>
                    ) : null}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 12px",
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          minWidth: 0,
                          fontWeight: 700,
                          color: "#172b4d",
                          wordBreak: "break-word",
                        }}
                      >
                        {task.title}
                      </div>
                      {onDeleteTask && task._id ? (
                        <button
                          type="button"
                          aria-label="Delete task"
                          onClick={(e) => {
                            e.stopPropagation();
                            void onDeleteTask(task._id || "");
                          }}
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "#C08497",
                            lineHeight: 1,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: 8,
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      ) : null}
                    </div>
                  </div>
                ))
              )}
            </div>

            <ModalFooter
              style={{
                justifyContent: "flex-end",
                fontSize: 14,
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <Button type="button" onClick={onAddNew}>
                <Plus size={16} />
                {addTaskLabel}
              </Button>
              {/* <Button
                type="button"
                onClick={onClose}
                style={{ background: "#d0d7de", color: "#1f2328" }}
              >
                {closeLabel}
              </Button> */}
            </ModalFooter>
          </>
        ) : (
          <>
            <h3
              style={{
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                fontSize: 14,
                gap: 8,
              }}
            >
              <CalendarDays size={18} />
              {translations.taskFor} {formattedDate}
            </h3>
            <LabelsSection>
              <LabelsTitle>
                {translations.labelsTitle} ({selectedLabels.length}/{MAX_LABELS}
                )
              </LabelsTitle>
              <LabelsGrid>
                {labelPalette.map((item) => {
                  const isSelected = selectedLabels.includes(item.color);
                  const isLimitReached = selectedLabels.length >= MAX_LABELS;
                  const isDisabled = isLimitReached && !isSelected;
                  return (
                    <LabelPill
                      key={item.color}
                      color={item.color}
                      isSelected={isSelected}
                      onClick={() => !isDisabled && toggleLabel(item.color)}
                      style={{
                        opacity: isDisabled ? 0.35 : 1,
                        cursor: isDisabled ? "not-allowed" : "pointer",
                        filter: isDisabled ? "grayscale(40%)" : "none",
                        transform: isDisabled ? "none" : undefined,
                        transition: "all 0.2s ease",
                      }}
                      title={isDisabled ? "Limit reached (max 4)" : ""}
                    >
                      {isSelected && "✓"}
                    </LabelPill>
                  );
                })}
              </LabelsGrid>
            </LabelsSection>
            <TextArea
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={translations.modalPlaceholder}
            />
            <ModalFooter style={{ gap: 8, flexWrap: "wrap" }}>
              {/* <Button
                type="button"
                onClick={onClose}
                style={{ background: "#d0d7de", color: "#1f2328" }}
              >
                {closeLabel}
              </Button> */}
              <Button type="button" onClick={onSave}>
                <Save size={16} />
                {translations.saveButton}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
