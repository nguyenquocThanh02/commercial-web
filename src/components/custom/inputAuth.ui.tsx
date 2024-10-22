import * as React from "react";
import {Eye, EyeOff, LucideIcon, LucideProps} from "lucide-react";

import {cn} from "@/libs/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  endIcon?: LucideIcon;
  iconProps?: LucideProps;
}

const InputAuth = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, endIcon, iconProps = {}, ...props}, ref) => {
    const [show, setShow] = React.useState(false);
    const EndIcon = endIcon;
    const {className: iconClassName, ...iconRest} = iconProps;

    if (type === "password") {
      return (
        <div className="relative w-full">
          <input
            ref={ref}
            autoComplete="off"
            className={cn(
              "flex h-9 w-full rounded-none border-b border-Text2/50 bg-transparent px-3 py-1 transition-all duration-0 placeholder:text-base placeholder:text-Text2/40 focus:outline-none focus:ring-0 disabled:cursor-not-allowed",
              "hover:border-b-2 hover:border-primary",
              className,
            )}
            style={{
              paddingLeft: "0",
            }}
            type={!show ? type : "text"}
            {...props}
          />
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 transform"
            type="button"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <Eye className={cn("stroke-slate-700/70", iconClassName)} size={24} />
            ) : (
              <EyeOff className={cn("stroke-slate-700/70", iconClassName)} size={24} />
            )}
          </button>
        </div>
      );
    }

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(
            "flex h-9 w-full rounded-none border-b border-Text2/50 bg-transparent px-3 py-1 text-sm transition-all duration-0 placeholder:text-base placeholder:text-Text2/40 focus:outline-none focus:ring-0 disabled:cursor-not-allowed",
            "hover:border-b-2 hover:border-primary",
            endIcon ? "pr-8" : "",
            className,
          )}
          style={{
            paddingLeft: "0",
          }}
          type={type}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
            <EndIcon
              className={cn("text-muted-foreground", iconClassName)}
              {...iconRest}
              size={18}
            />
          </div>
        )}
      </div>
    );
  },
);

InputAuth.displayName = "Input";

export {InputAuth};
