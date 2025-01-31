"use client";
import { useTheme } from "@/hooks/toogleTheme";
import React, { useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme!);
  }, [theme]);
  return (
    <span onClick={toggleTheme}>
      {theme === "dark" ? (
        <CiLight size={24} fill="var(--textColor)" className="cursor-pointer" />
      ) : (
        <CiDark size={24} fill="var(--textColor)"  className="cursor-pointer"/>
      )}
    </span>
  );
}
