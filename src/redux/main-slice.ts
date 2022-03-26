import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainState, Token} from "../types/main-reducer";
import replaceById from "../helpers/replace-by-id";
import {Contact, ContactID, Name} from "../types/contact";

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
        addContact(state, action: PayloadAction<Contact>) {
            state.contactList.push(action.payload)
        },
        removeContact(state, action: PayloadAction<ContactID>) {
            return {...state, contactList: state.contactList.filter(contact => contact.id !== action.payload)}
        },
        updateContact(state, action: PayloadAction<Contact>) {
            return {...state, contactList: replaceById(state.contactList, action.payload)}
        }
    }
});

export const mainReducer = mainSlice.reducer;
export const {addContact, removeContact, updateContact, setName, setToken} = mainSlice.actions;