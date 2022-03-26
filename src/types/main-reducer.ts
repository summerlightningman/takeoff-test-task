import {Contact, ContactID, ContactList, Name} from "./contact";
import {AnyAction} from "redux";

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

export interface AddContactAction extends AnyAction {
    type: MainActionType.ADD_CONTACT,
    payload: Contact
}

export interface RemoveContactAction extends AnyAction {
    type: MainActionType.REMOVE_CONTACT,
    payload: ContactID
}

export interface UpdateContactAction extends AnyAction {
    type: MainActionType.UPDATE_CONTACT,
    payload: Contact
}

export type MainAction =
    AddContactAction
    | RemoveContactAction
    | UpdateContactAction;