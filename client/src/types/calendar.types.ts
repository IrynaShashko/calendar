import type { TaskType } from "@shared/task.interface";

export type Translations = {
  taskFor: string;
  weekDays: string[];
  searchPlaceholder: string;
  confirmDelete: string;
  emptyTitleAlert: string;
  saveError: string;
  brandName: string;
  saveButton: string;
  modalPlaceholder: string;
  labelsTitle: string;
};

export interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  setTitle: (title: string) => void;
  date: Date | null;
  translations: Translations;
  language: string;
  selectedLabels: string[];
  setSelectedLabels: (labels: string[]) => void;
}

export interface Holiday {
  date: string;
  name: string;
  localName: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  dayHolidays: Holiday[];
  dayTasks: TaskType[];
}

export type Language = "en" | "uk";

export interface HeaderProps {
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  viewDate: Date;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  filteredResults: TaskType[];
  goToTask: (task: TaskType) => void;
  setViewDate: (date: Date) => void;
  language: "en" | "uk";
  setLanguage: (lang: "en" | "uk") => void;
  translations: Translations
}
