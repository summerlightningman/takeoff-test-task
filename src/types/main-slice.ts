import {ContactList} from "./contact";

export type Token = string;


export interface MainState {
    token: Token,
    contactList: ContactList
}

