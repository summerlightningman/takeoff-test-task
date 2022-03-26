import {configureStore} from "@reduxjs/toolkit";
import {mainReducer} from "./main-reducer";

export const store = configureStore({
    reducer: {
        main: mainReducer
    }
});

