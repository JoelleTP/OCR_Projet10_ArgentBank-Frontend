import { configureStore } from "@reduxjs/toolkit"
import { rootReducers } from "./reducers/index"

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
})
