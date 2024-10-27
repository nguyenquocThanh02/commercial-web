import * as React from "react";

import {cn} from "@/libs/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPrimary = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-[50px] w-full rounded bg-Secondary px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-Secondary file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        type={type}
        {...props}
      />
    );
  },
);

InputPrimary.displayName = "Input";

export {InputPrimary};
