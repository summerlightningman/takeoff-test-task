import {store} from "../redux/store";
import {MainAction, MainState} from "./main-reducer";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootActions = MainAction;
export interface RootStates {
    main: MainState
}