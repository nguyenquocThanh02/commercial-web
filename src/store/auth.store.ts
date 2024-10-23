import {create} from "zustand";

import {typeAuthState} from "@/types";

export const authStore = create<typeAuthState>((set) => ({
  isAuth: false,
  setIsAuth: (value: boolean) => set(() => ({isAuth: value})),
}));
