import { configureStore } from "@reduxjs/toolkit";
import currentVideoReducer from "./slices/currentVideoSlice";
import currentTimeReducer from "./slices/currentTimeSlice";
import durationReducer from "./slices/durationSlice";
import storedVideoReducer from "./slices/storedVideoSlice";
import currentTaskReducer from "./slices/currentTaskSlice";
import edgeTimesReducer from "./slices/edgeTimesSlice";

export const store = configureStore({ reducer: {
    currentVideo: currentVideoReducer,
    currentTime: currentTimeReducer,
    duration: durationReducer,
    storedVideo: storedVideoReducer,
    currentTask:currentTaskReducer,
    edgeTimes:edgeTimesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch