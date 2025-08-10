'use client'
import * as React from 'react'

/** ====== Context untuk Accordion (state global) ====== */
type Mode = 'single' | 'multiple'
type AccordionCtx = {
  type: Mode
  collapsible: boolean
  openKeys: string[]            // untuk 'single' maksimal 1 item
  setOpenKeys: (updater: (prev: string[]) => string[]) => void
}
const AccordionContext = React.createContext<AccordionCtx | null>(null)

/** ====== Context untuk item yang sedang dirender ====== */
const ItemContext = React.createContext<string | null>(null)

/** ====== Root ====== */
export function Accordion({
  defaultValue,
  type = 'single',
  collapsible = true,
  className,
  children,
}: {
  defaultValue?: string | string[]
  type?: Mode
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}) {
  const initial = React.useMemo<string[]>(
    () => (defaultValue == null ? [] : Array.isArray(defaultValue) ? defaultValue : [defaultValue]),
    [defaultValue]
  )
  const [openKeys, setOpenKeysState] = React.useState<string[]>(initial)
  const setOpenKeys = (updater: (prev: string[]) => string[]) =>
    setOpenKeysState((prev) => updater(prev))

  return (
    <AccordionContext.Provider value={{ type, collapsible, openKeys, setOpenKeys }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

/** ====== List ====== */
export function AccordionList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={['rounded-xl bg-neutral-100 dark:bg-neutral-800 p-1', className || ''].join(' ')}>
      {children}
    </div>
  )
}

/** ====== Item ====== */
export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(AccordionContext)
  const open = !!ctx?.openKeys.includes(value)
  return (
    <ItemContext.Provider value={value}>
      <div data-state={open ? 'open' : 'closed'} className={['border-b py-2', className || ''].join(' ')}>
        {children}
      </div>
    </ItemContext.Provider>
  )
}

/** ====== Trigger ====== */
export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(AccordionContext)
  const itemValue = React.useContext(ItemContext)
  if (!ctx || !itemValue) return null

  const open = ctx.openKeys.includes(itemValue)

  const toggle = () => {
    ctx.setOpenKeys((prev) => {
      if (ctx.type === 'single') {
        if (open) return ctx.collapsible ? [] : prev
        return [itemValue]
      } else {
        // multiple
        return open ? prev.filter((k) => k !== itemValue) : [...prev, itemValue]
      }
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      data-state={open ? 'open' : 'closed'}
      className={[
        'w-full text-left py-2 font-medium flex items-center justify-between transition-colors',
        // default (non-aktif)
        'text-neutral-700 dark:text-neutral-300/80 hover:text-neutral-900 dark:hover:text-neutral-200',
        // aktif
        'data-[state=open]:!text-neutral-900',
        className || '',
      ].join(' ')}
    >
      <span>{children}</span>
      {/* caret */}
      <svg
        className={['h-4 w-4 transition-transform', open ? 'rotate-180' : ''].join(' ')}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}

/** ====== Content ====== */
export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ctx = React.useContext(AccordionContext)
  const itemValue = React.useContext(ItemContext)
  if (!ctx || !itemValue) return null
  const open = ctx.openKeys.includes(itemValue)

  return (
    <div
      hidden={!open}
      className={['text-sm text-neutral-600 dark:text-neutral-300 pb-3', className || ''].join(' ')}
    >
      {children}
    </div>
  )
}
