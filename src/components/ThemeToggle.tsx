"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setTheme } from "../store/slices/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  const isDark = mode === "dark";

  // Обработчик переключения
  const handleToggle = (newMode: "light" | "dark") => {
    dispatch(setTheme(newMode));
  };

  return (
    <div 
      className="relative flex items-center bg-gray-200 dark:bg-gray-800 rounded-full p-1 w-24 h-10 border border-gray-300 dark:border-gray-700 shadow-inner"
      role="group"
      aria-label="Theme switcher"
    >
      {/* Анимированная подложка (The Slider). 
        Она абсолютно позиционирована и двигается влево/вправо в зависимости от темы.
      */}
      <div
        className={`
          absolute top-1 bottom-1 w-[calc(50%-4px)] 
          bg-white dark:bg-gray-600 
          rounded-full shadow-md z-0
          transition-transform duration-300 ease-out
          ${isDark ? "translate-x-[100%]" : "translate-x-0"}
        `}
      />

      {/* Кнопка Light */}
      <button
        type="button"
        aria-label="Switch to light mode"
        aria-pressed={!isDark}
        onClick={() => handleToggle("light")}
        className={`
          z-10 flex-1 flex justify-center items-center h-full rounded-full 
          transition-colors duration-200
          ${!isDark ? "text-yellow-500" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}
        `}
      >
        <FiSun 
          size={18} 
          className={`transition-transform duration-500 ${!isDark ? "rotate-0 scale-110" : "rotate-90 scale-90"}`} 
        />
      </button>

      {/* Кнопка Dark */}
      <button
        type="button"
        aria-label="Switch to dark mode"
        aria-pressed={isDark}
        onClick={() => handleToggle("dark")}
        className={`
          z-10 flex-1 flex justify-center items-center h-full rounded-full 
          transition-colors duration-200
          ${isDark ? "text-blue-400" : "text-gray-500 hover:text-gray-700"}
        `}
      >
        <FiMoon 
          size={18} 
          className={`transition-transform duration-500 ${isDark ? "-rotate-12 scale-110" : "rotate-0 scale-90"}`} 
        />
      </button>
    </div>
  );
}