import { createSlice } from "@reduxjs/toolkit";
import { TooltipCoordinates } from "../../types/coordinates";

const initialState: TooltipCoordinates = { left: 0, top: 0 }

const tooltipCoordinatesSlice = createSlice({
  name: 'tooltipCoordinates',
  initialState,
  reducers: {
    setCoordinates(state, action) {
      const { x, y } = action.payload
      return { ...state, left: x - 30, top: y - 30 }
    },
  },
})

const { actions, reducer } = tooltipCoordinatesSlice

export { actions };
export default reducer