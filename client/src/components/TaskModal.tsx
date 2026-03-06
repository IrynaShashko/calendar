import { labelPalette } from "src/constants/constants.js";

import {
  Button,
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
  onOpenAuth
}: TaskModalProps) => {
  if (!isOpen) return null;

  const MAX_LABELS = 4;

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

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {!user ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>{translations.authRequiredTitle}</h2>
            <p>{translations.authRequiredDesc}</p>
            <SubmitButton onClick={onOpenAuth} style={{ marginTop: "20px" }}>
              {translations.login}
            </SubmitButton>
          </div>
        ) : (
          <>
            <h3>
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
            <ModalFooter>
              <Button onClick={onSave}>{translations.saveButton}</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
