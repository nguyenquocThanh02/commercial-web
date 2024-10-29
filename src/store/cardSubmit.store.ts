import {create} from "zustand";

import {typeComplete} from "@/types";

export const cardSubmitStore = create<typeComplete>((set) => ({
  isComplete: false,
  method: "cash",
  setIsComplete: (value: boolean) => set(() => ({isComplete: value})),
  setMethod: (value: string) => set(() => ({method: value})),
}));
