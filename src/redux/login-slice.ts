import {LoginState} from "../types/login-reducer";
import {createSlice} from "@reduxjs/toolkit";

const initialState: LoginState = {
    login: '',
    pass: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.login = action.payload
        },
        setPass(state, action) {
            state.pass = action.payload
        }
    }
});

export const loginReducer = loginSlice.reducer;
export const {setLogin, setPass} = loginSlice.actions;