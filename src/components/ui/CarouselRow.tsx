'use client'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CarouselRow({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  const scroll = (dir: 'l' | 'r') => {
    const el = ref.current
    if (!el) return
    const step = Math.round(el.clientWidth * 0.9) // geser ±90% lebar view
    el.scrollBy({ left: dir === 'l' ? -step : step, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      {/* tombol kiri */}
      <button
        aria-label="Sebelumnya"
        onClick={() => scroll('l')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-sm backdrop-blur hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200"
      >
        <ChevronLeft className="size-5" />
      </button>

      {/* track */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {React.Children.map(children, (child) => (
          <div className="shrink-0 snap-start">{child}</div>
        ))}
      </div>

      {/* tombol kanan */}
      <button
        aria-label="Berikutnya"
        onClick={() => scroll('r')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-sm backdrop-blur hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-neutral-950/80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-neutral-950/80" />
    </div>
  )
}
