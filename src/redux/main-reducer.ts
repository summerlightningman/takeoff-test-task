import {MainAction, MainActionType, MainState} from "../types/main-reducer";

const initialState: MainState = {
    counter: 0
};

export const mainReducer = (state: MainState = initialState, action: MainAction) => {
    switch (action.type) {
        case MainActionType.INCREMENT:
            return {...state, counter: state.counter + (action.payload || 1)}
        case MainActionType.DECREMENT:
            return {...state, counter: state.counter - (action.payload || 1)}
        default:
            return initialState
    }
};