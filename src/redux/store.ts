import {configureStore} from "@reduxjs/toolkit";
import {mainReducer} from "./main-slice";
import {loginReducer} from "./login-slice";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        login: loginReducer
    }
});

