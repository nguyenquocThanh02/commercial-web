"use client";
import React, {useState} from "react";

import GamepadIcon from "../icon/gamepad.icon";

import {Link} from "@/app/navigation";

const CategoryButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className="group flex h-[145px] w-[170px] flex-col items-center justify-center gap-4 rounded border border-Text2/30 transition-all duration-300 hover:animate-pulse hover:border-none hover:bg-Secondary2"
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GamepadIcon strokeColor={isHovered ? "white" : "black"} />
      <h3 className={`transition-all duration-300 ${isHovered ? "text-Secondary1" : ""}`}>
        Gaming
      </h3>
    </Link>
  );
};

export default CategoryButton;
