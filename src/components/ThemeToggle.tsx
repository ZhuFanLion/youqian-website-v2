"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "system" ? "dark" : theme === "dark" ? "light" : "system")}
      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-bg-soft transition-colors text-xs font-medium text-text-secondary"
      title={`Theme: ${theme}`}
    >
      {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "💻"}
    </button>
  );
}
