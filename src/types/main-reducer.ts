import {Contact, ContactID, ContactList, Name} from "./contact";

export enum MainActionType {
    ADD_CONTACT = 'ADD_CONTACT',
    REMOVE_CONTACT = 'REMOVE_CONTACT',
    UPDATE_CONTACT = 'UPDATE_CONTACT'
}

export type Token = string;

export interface MainState {
    name: Name,
    token: Token,
    contactList: ContactList
}

export interface AddContactAction {
    type: MainActionType.ADD_CONTACT,
    payload: Contact
}

export interface RemoveContactAction {
    type: MainActionType.REMOVE_CONTACT,
    payload: ContactID
}

export interface UpdateContactAction {
    type: MainActionType.UPDATE_CONTACT,
    payload: Contact
}

export type MainAction =
    AddContactAction
    | RemoveContactAction
    | UpdateContactAction;