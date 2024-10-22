import React from "react";

import {typeSvgIconProps} from "@/types";

const RectangleIcon: React.FC<typeSvgIconProps> = ({
  width = 20,
  height = 40,
  fillColor = "#DB4444",
}) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 20 40"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={fillColor} height={height} rx="4" width={width} />
    </svg>
  );
};

export default RectangleIcon;
