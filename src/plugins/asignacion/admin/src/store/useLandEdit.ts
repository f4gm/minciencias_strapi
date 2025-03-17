import { create } from "zustand";
import { LandEditState } from "../types/LandEditState";

export const useLandEdit = create<LandEditState>((set) => ({
  activeEdit: false,
  active: () => {
    set({ activeEdit: true });
  },
  deactive: () => {
    set({ activeEdit: false });
  },
}));
