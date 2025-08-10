'use client'
import * as React from 'react'

type TabsCtx = { value: string; setValue: (v: string) => void }
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
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
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

  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      data-active={active}
      className={[
        'px-4 py-2 text-sm rounded-lg transition-colors',
        // non-aktif (sedikit redup)
        'text-neutral-700 dark:text-neutral-300/70 hover:text-neutral-900 dark:hover:text-neutral-200',
        // aktif: pill putih + TEKS HITAM (pakai ! buat menangin prioritas)
        'data-[active=true]:bg-white data-[active=true]:shadow',
        'data-[active=true]:!text-neutral-900 data-[active=true]:dark:!text-neutral-900',
        'data-[active=true]:font-semibold',
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
  if (!ctx || ctx.value !== value) return null
  return <div className={`mt-3 ${className || ''}`}>{children}</div>
}
