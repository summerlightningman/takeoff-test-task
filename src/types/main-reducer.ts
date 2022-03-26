import {ContactList, Name} from "./contact";

export type Token = string;

export interface MainState {
    name: Name,
    token: Token,
    contactList: ContactList
}

