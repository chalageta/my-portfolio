import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all active:scale-[0.98] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm": variant === "primary",
            "bg-foreground text-background hover:bg-foreground/90 shadow-sm": variant === "secondary",
            "border border-[#27272a] bg-transparent hover:bg-[#1a1a1a] text-foreground": variant === "outline",
            "hover:bg-[#1a1a1a] text-foreground": variant === "ghost",
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-11 px-6 py-2 text-base": size === "md",
            "h-14 px-8 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
