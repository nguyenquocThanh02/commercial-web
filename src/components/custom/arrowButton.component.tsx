import Image from "next/image";
import React, {ButtonHTMLAttributes} from "react";

import iconRowRight from "@/assets/svg/icons_arrow-right.svg";
import iconRowLeft from "@/assets/svg/icons_arrow-left.svg";

interface ButtonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direct?: string;
}

const ArrowButton: React.FC<ButtonCustomProps> = ({direct = "right", ...props}) => {
  return (
    <button
      className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-Secondary hover:opacity-70"
      {...props}
    >
      <Image alt="icon arrow" sizes="24" src={direct === "right" ? iconRowRight : iconRowLeft} />
    </button>
  );
};

export default ArrowButton;
