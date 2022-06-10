import { createStoreHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

export const store = configureStore({reducer:{ todos: rootReducer }});

const todoAction = { type: "ADD_TODO", todo: "buy milk" };
store.dispatch(todoAction);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
