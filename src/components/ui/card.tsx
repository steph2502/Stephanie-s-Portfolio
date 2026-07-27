import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-border bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
        className
      )}
      {...props}
    />
  );
}
