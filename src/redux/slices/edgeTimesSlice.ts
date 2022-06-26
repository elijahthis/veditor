import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EdgeTimesProps {
    start: number;
    end:number;
}

export interface EdgeTimesState {
    edgeTimes: EdgeTimesProps;
}

const initialState: EdgeTimesState = {
    edgeTimes:{start:0, end:12},
};

export const edgeTimesSlice = createSlice({
    name: "edgeTimes",
    initialState,
    reducers: {
        SETEDGETIMES: (state, action: PayloadAction<EdgeTimesProps>) => {
            state.edgeTimes = action.payload;
        },
    },
});

export const { SETEDGETIMES } = edgeTimesSlice.actions;

export default edgeTimesSlice.reducer;
