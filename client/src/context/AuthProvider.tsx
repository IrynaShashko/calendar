import { useState, useEffect } from "react";

import { AuthContext } from "./AuthContext";

import api from "src/api/axios";

import type { Language } from "src/types/calendar.types";
import type { UserType } from "@shared/task.interface";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Omit<UserType, "password"> | null>(null);
  const [loading, setLoading] = useState(true); 
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get("/auth/profile");
        setUser(response.data.user);
      } catch (error) {
        console.info("Not authenticated or session expired", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const [language, setLanguageState] = useState<Language>(
    (localStorage.getItem("lang") || "en") as Language,
  );

  const setLanguage = (lang: string) => {
    setLanguageState(lang as Language);
    localStorage.setItem("lang", lang);
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
    }
  };
  
  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        language,
        setLanguage,
        isAuthModalOpen,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
