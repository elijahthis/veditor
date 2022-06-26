import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentTaskProps {
    name: string;
    details:string;
}

export interface CurrentTaskState {
    currentTask: CurrentTaskProps;
}

const initialState: CurrentTaskState = {
    currentTask:{name:"Trim", details:'gif'},
};

export const currentTaskSlice = createSlice({
    name: "currentTask",
    initialState,
    reducers: {
        SETCURRENTTASK: (state, action: PayloadAction<CurrentTaskProps>) => {
            state.currentTask = action.payload;
        },
    },
});

export const { SETCURRENTTASK } = currentTaskSlice.actions;

export default currentTaskSlice.reducer;
