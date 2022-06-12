import { configureStore } from "@reduxjs/toolkit";
import currentVideoReducer from "./slices/currentVideoSlice";
import currentTimeReducer from "./slices/currentTimeSlice";
import durationReducer from "./slices/durationSlice";

export const store = configureStore({ reducer: {
    currentVideo: currentVideoReducer,
    currentTime: currentTimeReducer,
    duration: durationReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch