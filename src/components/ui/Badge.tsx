import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-[#1a1a1a] text-[#e4e4e7] hover:bg-[#262626]": variant === "default",
          "border border-[#27272a] text-[#e4e4e7]": variant === "outline",
          "bg-accent/10 text-accent hover:bg-accent/20": variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
