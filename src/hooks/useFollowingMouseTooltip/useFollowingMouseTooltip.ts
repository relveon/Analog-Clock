import { useHover } from "../useHover/useHover";
import React, { useEffect } from "react";

import { actions as tooltipActions } from "../../store/tooltipReducer/tooltipReducer"
import { useDispatch } from "react-redux";

interface UseFollowingMouseTooltip {
  isHovered: boolean
  ref: React.MutableRefObject<HTMLDivElement>
}

const useFollowingMouseTooltip = (): UseFollowingMouseTooltip => {
  const dispatch = useDispatch()
  const { isHovered, mouseCoordinates, ref } = useHover()

  useEffect(() => {
    dispatch(tooltipActions.setCoordinates(mouseCoordinates))
  }, [ref, mouseCoordinates])

  return { isHovered, ref }
}

export { useFollowingMouseTooltip }