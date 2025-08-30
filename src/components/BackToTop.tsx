'use client'
import * as React from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = React.useState(false)
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null
  return (
    <button
      aria-label="Kembali ke atas"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
      }
      className="fixed bottom-6 right-6 z-50 rounded-full border
                 bg-white/90 dark:bg-neutral-900/90 backdrop-blur
                 border-neutral-200 dark:border-neutral-700 shadow-lg
                 hover:scale-[1.03] active:scale-95 transition
                 h-12 w-12 grid place-items-center"
    >
      <ChevronUp className="size-5" />
    </button>
  )
}
