"use client";

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

function ThemeSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "l-header__switch bg-transparent data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent " +
        "border border-[var(--color-main)] data-[state=checked]:border-white data-[state=unchecked]:border-black rounded-full cursor-pointer relative " +
        "inline-flex h-[1.25rem] w-10 shrink-0 items-center transition-all outline-none shadow-xs " +
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={theme === "black"}
      onCheckedChange={toggleTheme}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block size-3.5 rounded-full ring-0 transition-transform pointer-events-none " +
          "data-[state=checked]:translate-x-[calc(100%+5.5px)] data-[state=checked]:bg-white " +
          "data-[state=unchecked]:translate-x-1 data-[state=unchecked]:bg-black"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { ThemeSwitch }