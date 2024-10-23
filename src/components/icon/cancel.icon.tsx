import React from "react";

import {typeSvgIconProps} from "@/types";

const CancelIcon: React.FC<typeSvgIconProps> = ({
  width = 24,
  height = 24,
  fillColor = "none",
  strokeColor = "#FAFAFA",
}) => {
  return (
    <svg
      fill={fillColor}
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1413_480)">
        <path
          d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="11.25" stroke={strokeColor} strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_1413_480">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CancelIcon;
