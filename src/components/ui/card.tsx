
import * as React from "react";
import clsx from "../ui/clsx";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("rounded-2xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800", className)} {...props}/>;
}
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("p-6 pb-0", className)} {...props}/>;
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <h3 className={clsx("text-lg font-semibold", className)} {...props}/>;
}
export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx("text-sm text-neutral-600 dark:text-neutral-300", className)} {...props}/>;
}
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("p-6 pt-4", className)} {...props}/>;
}
export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("p-6 pt-0 flex items-center", className)} {...props}/>;
}
