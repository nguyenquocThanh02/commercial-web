import {create} from "zustand";

import {typeAuthState} from "@/types";

export const authStore = create<typeAuthState>((set) => ({
  auth: "",
  setAuth: (value: string) => set(() => ({auth: value})),
}));
