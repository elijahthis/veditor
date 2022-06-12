import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentTimeState {
    currentTime: number;
}

const initialState: CurrentTimeState = {
    currentTime: 0,
};

export const currentTimeSlice = createSlice({
    name: "currentTime",
    initialState,
    reducers: {
        SETCURRENTTIME: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload;
        },
    },
});

export const { SETCURRENTTIME } = currentTimeSlice.actions;

export default currentTimeSlice.reducer;
