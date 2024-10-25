import React, {ButtonHTMLAttributes, ReactNode} from "react";

import {Button} from "../ui/button";

import {cn} from "@/libs/utils";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  classForText?: string;
  children: ReactNode;
}

const PrimaryButton: React.FC<ButtonCustomProps> = ({
  className = "",
  classForText = "",
  children,
  type = "button",
  ...props
}) => {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden rounded border border-Secondary2 bg-Secondary2 px-5 py-2.5 font-medium text-Text shadow-inner transition-all duration-300 hover:bg-Secondary2",
        className,
      )}
      type={type}
      {...props}
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 bg-Secondary1 transition-all duration-300 group-hover:w-full" />

      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 bg-Secondary1 transition-all duration-300 group-hover:w-full" />

      <span className="ease absolute left-0 top-0 h-0 w-full bg-Secondary1 transition-all delay-300 duration-300 group-hover:h-full" />

      <span className="ease absolute bottom-0 left-0 h-0 w-full bg-Secondary1 transition-all delay-300 duration-300 group-hover:h-full" />

      <span className="absolute inset-0 h-full w-full bg-Secondary1 opacity-0 delay-300 duration-300 group-hover:opacity-100" />

      <span
        className={cn(
          "ease relative text-base font-medium transition-colors delay-300 duration-300 group-hover:text-Secondary2",
          classForText,
        )}
      >
        {children}
      </span>
    </Button>
  );
};

export default PrimaryButton;
