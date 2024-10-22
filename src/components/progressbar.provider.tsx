"use client";

import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import React from "react";

const ProgressBarProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}
      <ProgressBar shallowRouting color="#DB4444" height="4px" options={{showSpinner: true}} />
    </>
  );
};

export default ProgressBarProviders;
