import { configureStore } from '@reduxjs/toolkit'
import tooltipCoordinatesReducer from "./tooltipReducer/tooltipReducer";

export const store = configureStore({
  reducer: {
    tooltipCoordinates: tooltipCoordinatesReducer,
    // watchTheme: watchThemeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store