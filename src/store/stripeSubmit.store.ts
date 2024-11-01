import {create} from "zustand";

import {typeSubmit} from "@/types";

export const stripeSubmitStore = create<typeSubmit>((set) => ({
  submit: false,
  setSubmit: () => set((state) => ({submit: !state.submit})),
}));
