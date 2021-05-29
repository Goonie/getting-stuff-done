import { useState, useEffect } from "react";

function useAltKeypress(code: string) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(
    function () {
      function keyDown(event: KeyboardEvent) {
        if (event.altKey && event.code === code) {
          event.preventDefault();
          setKeyPressed(true);
        }
      }

      function keyUp(event: KeyboardEvent) {
        if (event.code === code) {
          event.preventDefault();
          setKeyPressed(false);
        }
      }

      window.addEventListener("keydown", keyDown);
      window.addEventListener("keyup", keyUp);

      return function () {
        window.removeEventListener("keydown", keyDown);
        window.removeEventListener("keyup", keyUp);
      };
    },
    [code]
  );

  return keyPressed;
}

export { useAltKeypress };
