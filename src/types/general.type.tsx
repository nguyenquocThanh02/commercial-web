import React from "react";

export type typeBreadCrumbs = {
  link?: string;
  name: string;
};
export type typeSidebarProfile = {
  link?: string;
  name: string;
  sub?: typeBreadCrumbs[];
};

export type typeCountDownTime = {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

export type typeProfileNav = {
  name: string;
  icon: React.ReactElement;
  path: string;
  isButton?: boolean;
};

export type typeCardPerson = {
  name: string;
  image: string | "";
  job: string;
};

export type typeLocale = {
  vi?: string;
  en?: string;
};

export type typeUiStore = {
  hoveredIcon: boolean;
  setHoveredIcon: (value: boolean) => void;
};
