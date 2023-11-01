import { useHover } from "../useHover/useHover";
import { useEffect } from "react";

import { actions as tooltipActions } from "../../store/tooltipReducer/tooltipReducer"
import { useDispatch } from "react-redux";

const useFollowingMouseTooltip = () => {
  const dispatch = useDispatch()
  const { isHovered, mouseCoordinates, ref } = useHover()

  useEffect(() => {
    dispatch(tooltipActions.setCoordinates(mouseCoordinates))
  }, [ref, mouseCoordinates])

  return { isHovered, ref }
}

export { useFollowingMouseTooltip }