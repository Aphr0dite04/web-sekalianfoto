
'use client'
import React from "react"
import { useTheme } from "@/lib/theme"
export default function ThemeToggle(){
  const { theme, toggle } = useTheme()
  return (
    <button aria-label="Toggle Theme" onClick={toggle} className="h-10 w-10 grid place-items-center rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}
