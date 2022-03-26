import {Login, LoginState, Message, Password} from "../types/login-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: LoginState = {
    login: '',
    pass: '',
    message: ''
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin(state, action: PayloadAction<Login>) {
            state.login = action.payload;
        },
        setPass(state, action: PayloadAction<Password>) {
            state.pass = action.payload;
        },
        setMessage(state, action: PayloadAction<Message>) {
            state.message = action.payload;
        }
    }
});

export const loginReducer = loginSlice.reducer;
export const {setLogin, setPass, setMessage} = loginSlice.actions;