import { labelPalette } from "src/constants/constants.js";
import {
  Button,
  ModalContent,
  ModalOverlay,
  TextArea,
  LabelsSection,
  LabelsTitle,
  LabelsGrid,
  LabelPill,
  ModalFooter,
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
}: TaskModalProps) => {
  if (!isOpen) return null;

  const MAX_LABELS = 4;

  const toggleLabel = (color: string) => {
    const isAlreadySelected = selectedLabels.includes(color);

    if (isAlreadySelected) {
      // Видаляємо без перешкод
      setSelectedLabels(selectedLabels.filter((c) => c !== color));
    } else if (selectedLabels.length < MAX_LABELS) {
      // Додаємо тільки якщо є місце
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

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>
          {translations.taskFor} {formattedDate}
        </h3>

        <LabelsSection>
          <LabelsTitle>
            {translations.labelsTitle} ({selectedLabels.length}/{MAX_LABELS})
          </LabelsTitle>
          <LabelsGrid>
            {labelPalette.map((item) => {
              const isSelected = selectedLabels.includes(item.color);
              const isLimitReached = selectedLabels.length >= MAX_LABELS;
              // Деактивуємо картку, якщо ліміт вичерпано і вона не вибрана
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

        <ModalFooter>
          <Button onClick={onSave}>{translations.saveButton}</Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};
