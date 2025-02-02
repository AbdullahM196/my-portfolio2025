"use client";
import { useTheme } from "../../hooks/toogleTheme";
import React, { useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 100,
            behavior: "smooth",
          });
        }
      });
    });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme!);
  }, [theme]);
  return (
    <span onClick={toggleTheme}>
      {theme === "dark" ? (
        <CiLight size={24} fill="var(--textColor)" className="cursor-pointer" />
      ) : (
        <CiDark size={24} fill="var(--textColor)" className="cursor-pointer" />
      )}
    </span>
  );
}
