import React, { useEffect, useRef, useState } from "react";

import { MouseCoordinates } from "../../types/coordinates";

interface UseHoverHook {
  isHovered: boolean
  mouseCoordinates: MouseCoordinates
  ref: React.MutableRefObject<HTMLDivElement>
}

const initMouseCoordinates: MouseCoordinates = { x: 0, y: 0 }

const useHover = (): UseHoverHook => {
  const [isHovered, setHovered] = useState(false)
  const [mouseCoordinates, setMouseCoordinates] = useState(initMouseCoordinates)

  const ref = useRef(null);

  const handleMouseOver = (e) => {
    setMouseCoordinates({ x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop })
    setHovered(true)
  };

  const handleMouseOut = () => {
    setMouseCoordinates(initMouseCoordinates)
    setHovered(false)
  }

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mousemove", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mousemove", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, [ref.current]);

  return { isHovered, mouseCoordinates, ref };
}

export { useHover }