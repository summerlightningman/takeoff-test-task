import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainState} from "../types/main-reducer";
import replaceById from "../helpers/replace-by-id";
import {Contact, ContactID} from "../types/contact";

const initialState: MainState = {
    name: 'test',
    token: 'tokentokentoken',
    contactList: [
        {id: 2, name: 'test', tel: '8800test'},
        {id: 1, name: 'test', tel: '8800test'}
    ]
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
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
export const {addContact, removeContact, updateContact} = mainSlice.actions;