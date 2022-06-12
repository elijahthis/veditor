import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentVideoState {
    currentVideo: string;
}

const initialState: CurrentVideoState = {
    currentVideo: "",
};

export const currentVideoSlice = createSlice({
    name: "currentVideo",
    initialState,
    reducers: {
        SETCURRENTVIDEO: (state, action: PayloadAction<string>) => {
            state.currentVideo = action.payload;
        },
    },
});

export const { SETCURRENTVIDEO } = currentVideoSlice.actions;

export default currentVideoSlice.reducer;
