import React, {ButtonHTMLAttributes, ReactNode} from "react";

import {Button} from "../ui/button";

import {cn} from "@/libs/utils";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}
const SecondaryButton: React.FC<ButtonCustomProps> = ({className, children, ...props}) => {
  return (
    <Button
      className={cn("h-[56px] rounded border border-Text1 font-medium", className)}
      variant={"outline"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
