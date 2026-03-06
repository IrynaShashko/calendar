import type { UserType } from "@shared/task.interface";
import { createContext, useContext } from "react";
import type { Language } from "src/types/calendar.types";

interface AuthContextType {
  user: Omit<UserType, "password"> | null;
  setUser: (user: Omit<UserType, "password"> | null) => void;
  logout: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
