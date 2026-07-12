import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import todoReducer from "./slices/todoSlice";
import authReducer from "./slices/authSlice";


export const store = configureStore({
reducer: {
    theme: themeReducer,
    todos: todoReducer,
    auth: authReducer,
},
});

