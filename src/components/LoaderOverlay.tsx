'use client'
import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function LoaderOverlay() {
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const DURATION = prefersReduced ? 200 : 900 // lebih singkat buat yang reduce motion
    const t = setTimeout(() => setShow(false), DURATION)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] backdrop-blur-xl bg-neutral-950/40 dark:bg-black/50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Memuat halaman"
        >
          <div className="flex flex-col items-center gap-5">
            {/* lingkaran logo */}
            <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-3xl bg-white dark:bg-neutral-900 grid place-items-center shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              <img
                src="/icon.png"
                alt="Sekalian Foto"
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
                draggable={false}
              />
              {/* spinner tipis */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent border-t-neutral-300 dark:border-t-neutral-700 animate-spin"
              />
            </div>
            <div className="text-center">
              <div className="text-base md:text-lg font-semibold">Sekalian Foto</div>
              <div className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">Rekam Jejak Kebahagiaan</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
