import React from "react";

import {typeSvgIconProps} from "@/types";

const ProfileIcon: React.FC<typeSvgIconProps> = ({
  width = 32,
  height = 32,
  fillColor = "none",
  strokeColor = "black",
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
        <path
          d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default ProfileIcon;