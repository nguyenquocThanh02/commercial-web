import React from "react";

import {typeSvgIconProps} from "@/types";

const ProfileActiveIcon: React.FC<typeSvgIconProps> = ({
  width = 32,
  height = 32,
  fillColor = "#DB4444",
  strokeColor = "white",
}) => {
  return (
    <div>
      <svg
        fill={fillColor}
        height={height}
        viewBox="0 0 32 32"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill={fillColor} height="32" rx="16" width="32" />
        <path
          d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default ProfileActiveIcon;