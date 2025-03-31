import { create } from "zustand";

interface ControlKeyStore {
  isControlPressed: boolean;
  setControlPressed: (pressed: boolean) => void;
}

export const useControlKeyStore = create<ControlKeyStore>((set, get) => ({
  isControlPressed: false,
  setControlPressed: (pressed) => {
    const { isControlPressed } = get();

    if (isControlPressed !== pressed) {
      console.log(pressed);
      set({ isControlPressed: pressed });
    }
  },
}));
