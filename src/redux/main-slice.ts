import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainState, Token} from "../types/main-slice";
import {Contact, ContactID, ContactList, Name} from "../types/contact";

const initialState: MainState = {
    token: '',
    searchingName: '',
    contactList: []
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<Token>) {
            state.token = action.payload;
        },
        setContactList(state, action: PayloadAction<ContactList>) {
            state.contactList = action.payload;
        },
        setContactData(state, action: PayloadAction<Contact>) {
            const newContact = action.payload;
            const contact = state.contactList.find(contact_ => contact_.id === newContact.id);
            if (!contact)
                return

            contact.name = newContact.name;
            contact.tel = newContact.tel;
        },
        removeContact(state, action: PayloadAction<ContactID>) {
            state.contactList = state.contactList.filter(contact => contact.id !== action.payload);
        },
        setSearchingName(state, action: PayloadAction<Name>) {
            state.searchingName = action.payload;
        }
    }
});

export const mainReducer = mainSlice.reducer;
export const {setToken, setContactList, setContactData, removeContact, setSearchingName} = mainSlice.actions;