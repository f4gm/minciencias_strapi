import { useEffect } from "react";
import { useControlKeyStore } from "../store/useControlKey";

export const useControlKeyListener = () => {
  const { setControlPressed } = useControlKeyStore((state) => state);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        setControlPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!event.ctrlKey) {
        setControlPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
    };
  }, [setControlPressed]);
};
