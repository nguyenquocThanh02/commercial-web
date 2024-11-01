"use client";
import React, {ButtonHTMLAttributes} from "react";

import {cn} from "@/libs/utils";
import {Link} from "@/app/navigation";

interface LinkCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  className?: string;
  text: string;
  isActive?: boolean;
}

const LinkCustom: React.FC<LinkCustomProps> = ({
  href,
  className = "",
  text,
  isActive = false,
  ...props
}) => {
  return (
    <Link
      className={cn("group relative w-max text-base font-semibold", className)}
      href={href}
      prefetch={false}
    >
      <span className="hover:opacity-70" {...props}>
        {text}
      </span>
      <span
        className={cn(
          "absolute -bottom-1 left-1/2 h-0.5 w-0 bg-Secondary2 transition-all group-hover:w-3/6",
          {"w-3/6": isActive},
        )}
      />
      <span
        className={cn(
          "absolute -bottom-1 right-1/2 h-0.5 w-0 bg-Secondary2 transition-all group-hover:w-3/6",
          {"w-3/6": isActive},
        )}
      />
    </Link>
  );
};

export default LinkCustom;
