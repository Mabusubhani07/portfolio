"use client";

import React, { createContext, useContext, useEffect } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure dark mode class is permanently stripped and reset to light canvas
    document.documentElement.classList.remove("dark");
    try {
      localStorage.removeItem("dm-theme");
    } catch {
      // ignore in sandboxed environments
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
        toggleTheme: () => {},
        setTheme: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
