import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./main-reducer";
import {RootActions, RootStates} from "../types/store";


export const store = configureStore<RootStates, RootActions>({
    reducer: {
        main: mainReducer
    }
});

