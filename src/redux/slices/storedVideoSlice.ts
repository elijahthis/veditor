import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface storedVideoProps {
    filename:string;
    filepath:string
}

export interface storedVideoState {
    storedVideo: storedVideoProps;
}

const initialState: storedVideoState = {
    storedVideo: { filename: '', filepath: '' },
};



export const storedVideoSlice = createSlice({
    name: "storedVideo",
    initialState,
    reducers: {
        SETSTOREDVIDEO: (state, action: PayloadAction<storedVideoProps>) => {
            state.storedVideo = {...state.storedVideo, filename: action.payload.filename, filepath: action.payload.filepath};
        },
    },
});

export const { SETSTOREDVIDEO } = storedVideoSlice.actions;

export default storedVideoSlice.reducer;
