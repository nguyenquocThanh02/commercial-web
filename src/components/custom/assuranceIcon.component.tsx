import Image from "next/image";
import React from "react";

const AssuranceIconComponent: React.FC<{icon: string}> = ({icon}) => {
  return (
    <div className="flex h-20 w-20 rounded-full border-[11px] border-BorderIcon/30">
      <div className="m-auto rounded-full bg-Text2 p-[10px]">
        <Image alt="icon assurance" sizes="40" src={icon} />
      </div>
    </div>
  );
};

export default AssuranceIconComponent;
