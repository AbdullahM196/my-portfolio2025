"use client";
import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  theme:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || getDefaultTheme()
      : "light",
};
export const themeSlice = createSlice({
  initialState,
  name: "theme",
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem("theme", state.theme === "light" ? "dark" : "light");
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
