import { useLayoutEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreen] = useState(window.innerWidth);

  useLayoutEffect(function () {
    function handleResize() {
      setScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenWidth;
}
