'use client'
import * as React from 'react'

type TabsCtx = {
  value: string
  setValue: (v: string) => void
  register: (id: string, ref: HTMLButtonElement | null) => void
  order: string[]
  getNext: (current: string, dir: 1 | -1) => string
}
const TabsContext = React.createContext<TabsCtx | null>(null)

export function Tabs({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string
  className?: string
  children: React.ReactNode
}) {
  const [value, setValue] = React.useState(defaultValue)
  const refs = React.useRef<Record<string, HTMLButtonElement | null>>({})

  const register = (id: string, ref: HTMLButtonElement | null) => {
    refs.current[id] = ref
  }
  const order = React.useMemo(() => Object.keys(refs.current), [value]) // cukup dinamis
  const getNext = (current: string, dir: 1 | -1) => {
    const idx = order.indexOf(current)
    if (idx === -1 || order.length === 0) return current
    const next = (idx + dir + order.length) % order.length
    return order[next]
  }

  return (
    <TabsContext.Provider value={{ value, setValue, register, order, getNext }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({
  children,
  className,
  label = 'Tabs',
}: {
  children: React.ReactNode
  className?: string
  label?: string
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={`rounded-xl bg-neutral-100 dark:bg-neutral-800 p-1 grid grid-cols-3 gap-2 ${className || ''}`}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) return null
  const active = ctx.value === value
  const id = `tab-${value}`
  const panelId = `panel-${value}`
  const ref = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    ctx.register(value, ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const next = ctx.getNext(value, e.key === 'ArrowRight' ? 1 : -1)
      ctx.setValue(next)
      refsFocus(next)
    } else if (e.key === 'Home') {
      e.preventDefault()
      const first = ctx.order[0]
      if (first) { ctx.setValue(first); refsFocus(first) }
    } else if (e.key === 'End') {
      e.preventDefault()
      const last = ctx.order[ctx.order.length - 1]
      if (last) { ctx.setValue(last); refsFocus(last) }
    }
  }

  const refsFocus = (v: string) => {
    // kecil tapi cukup
    const btn = document.getElementById(`tab-${v}`) as HTMLButtonElement | null
    btn?.focus()
  }

  return (
    <button
      ref={ref}
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      type="button"
      onKeyDown={onKeyDown}
      onClick={() => ctx.setValue(value)}
      data-active={active}
      className={[
        'px-4 py-2 text-sm rounded-lg transition-colors',
        active
          ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 shadow ring-1 ring-black/5 dark:ring-white/10'
          : 'text-neutral-600 dark:text-neutral-300 hover:bg-white/70 hover:dark:bg-neutral-900/50',
        className || '',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) return null
  const active = ctx.value === value
  const id = `panel-${value}`
  const tabId = `tab-${value}`

  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!active}
      className={className}
    >
      {active ? children : null}
    </div>
  )
}
