import {create} from "zustand";

import {typeUiStore} from "@/types";

export const uiStore = create<typeUiStore>((set) => ({
  hoveredIcon: false,
  setHoveredIcon: (value: boolean) => set(() => ({hoveredIcon: value})),
}));
