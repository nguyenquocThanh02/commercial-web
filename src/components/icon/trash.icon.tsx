import React from "react";

import {typeSvgIconProps} from "@/types";

const TrashIcon: React.FC<typeSvgIconProps> = ({
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
      <path
        d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.56"
      />
    </svg>
  );
};

export default TrashIcon;
