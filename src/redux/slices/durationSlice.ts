import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface durationState {
    duration: number;
}

const initialState: durationState = {
    duration: 0,
};

export const durationSlice = createSlice({
    name: "duration",
    initialState,
    reducers: {
        SETDURATION: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
    },
});

export const { SETDURATION } = durationSlice.actions;

export default durationSlice.reducer;
