import React from "react";

const WaitingLayout = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-Primary1/30">
      <div className="grid gap-3">
        <h2 className="font-manrope flex items-center bg-gradient-to-tr from-Secondary to-Secondary2 bg-clip-text text-4xl font-extrabold leading-loose text-transparent">
          L{" "}
          <div className="flex h-6 w-6 animate-spin items-center justify-center rounded-md bg-gradient-to-tr from-Secondary to-Secondary2">
            <div className="size-4 rounded-md bg-Secondary2" />
          </div>
          ading...
        </h2>
      </div>
    </div>
  );
};

export default WaitingLayout;
