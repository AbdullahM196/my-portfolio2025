"use client";
import Loading from "../components/loading/Loading";
import { createContext, useContext, useEffect, useState } from "react";
function getDefaultTheme() {
  if (typeof window !== "undefined") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }
}

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
export default function ToggleThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme: string = (localStorage.getItem("theme") ||
        getDefaultTheme())!;
      setTheme(savedTheme);
    }
  }, []);
  function toggleTheme(): void {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  }
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme!);
    setLoading(false);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {loading ? <Loading /> : children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
