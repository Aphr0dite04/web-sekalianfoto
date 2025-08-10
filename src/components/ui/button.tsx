
import * as React from "react";
import clsx from "../ui/clsx";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant="default", size="md", asChild, ...props}, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl font-medium transition shadow-sm";
    const variants = {
      default: "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black",
      outline: "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800",
      ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-800"
    } as const;
    const sizes = { sm: "h-9 px-3 text-sm", md: "h-11 px-4", lg: "h-12 px-5 text-base" } as const;
    return <button ref={ref} className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
