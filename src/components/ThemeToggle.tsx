'use client'
import React from "react"
import { useTheme } from "@/lib/theme"

export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  const pressed = theme === 'dark'
  return (
    <button
      aria-label="Toggle Theme"
      aria-pressed={pressed}
      onClick={toggle}
      className="h-10 w-10 grid place-items-center rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      title={pressed ? "Tema terang" : "Tema gelap"}
    >
      {pressed ? "☀️" : "🌙"}
    </button>
  )
}
