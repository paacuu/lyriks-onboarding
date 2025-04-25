import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "outline" | "default";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyle =
      "px-4 py-2 rounded-xl font-medium transition-colors duration-200";
    const styles = {
      default: "bg-[#FC9600] text-white hover:bg-[#bb46f5]",
      outline: "border border-[#FC9600] text-[#FC9600] bg-white hover:bg-[#FFF6EE]",
    };

    return (
      <button
        className={cn(baseStyle, styles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };

