import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainState, Token} from "../types/main-slice";
import {ContactList, Name} from "../types/contact";

const initialState: MainState = {
    name: '',
    token: '',
    contactList: []
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<Name>) {
            state.name = action.payload;
        },
        setToken(state, action: PayloadAction<Token>) {
            state.token = action.payload;
        },
        setContactList(state, action: PayloadAction<ContactList>) {
            state.contactList = action.payload;
        }
    }
});

export const mainReducer = mainSlice.reducer;
export const {setName, setToken, setContactList} = mainSlice.actions;