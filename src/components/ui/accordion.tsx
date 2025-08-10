
'use client'
import * as React from 'react'
export function Accordion({ children, className }:{children:any, className?:string}){ return <div className={className}>{children}</div> }
export function AccordionItem({ children }:{children:any, value:string}){ return <div className="border-b py-2">{children}</div> }
export function AccordionTrigger({ children }:{children:any}){
  const [open,setOpen]=React.useState(false);
  return <button onClick={()=>setOpen(o=>!o)} className="w-full text-left py-2 font-medium">{children}</button>
}
export function AccordionContent({ children }:{children:any}){ return <div className="text-sm text-neutral-600 dark:text-neutral-300 pb-2">{children}</div> }
