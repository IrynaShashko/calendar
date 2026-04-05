import type { TaskType, UserType } from "@shared/task.interface";

export type Translations = {
  taskFor: string;
  weekDays: string[];
  searchPlaceholder: string;
  confirmDelete: string;
  emptyTitleAlert: string;
  taskDeleted: string;
  saveError: string;
  brandName: string;
  saveButton: string;
  modalPlaceholder: string;
  labelsTitle: string;
  userPrefix: string;
  logout: string;
  login: string;
  prevMonth: string;
  nextMonth: string;
  loginTitle: string;
  registerTitle: string;
  signIn: string;
  signUp: string;
  noAccount: string;
  haveAccount: string;
  emailLabel: string;
  passwordLabel: string;
  nameLabel: string;
  authError: string;
  errInvalidEmail: string;
  errPasswordLength: string;
  errNameRequired: string;
  loadingSignIn: string;
  loadingSignUp: string;
  errorInvalidCredentials: string;
  errorUserExists: string;
  errorDefault: string;
  loginToCreateTask: string;
  authRequiredTitle: string;
  authRequiredDesc: string;
};

export type AuthUser = Omit<UserType, "password">;

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
  user: AuthUser | null;
  onOpenAuth: () => void;
  dayTasks?: TaskType[];
  dayHolidays?: Holiday[];
  mode?: "form" | "day-tasks";
  onAddNew?: () => void;
  onEditTask?: (task: TaskType) => void;
  onDeleteTask?: (taskId: string) => void | Promise<void>;
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
  translations: Translations;
}
