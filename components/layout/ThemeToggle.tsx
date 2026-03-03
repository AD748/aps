"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="px-3 py-2 rounded-xl border border-border"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="text-white" />
      ) : (
        <Moon className=" text-gray-800" />
      )}
    </button>
  );
}