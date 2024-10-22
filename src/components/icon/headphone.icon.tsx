import React from "react";

import {typeSvgIconProps} from "@/types";

const WishlistIcon: React.FC<typeSvgIconProps> = ({
  width = 56,
  height = 56,
  fillColor = "none",
  strokeColor = "black",
}) => {
  return (
    <svg
      fill={fillColor}
      height={height}
      viewBox="0 0 56 56"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1098_669)">
        <path
          d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1098_669">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WishlistIcon;
