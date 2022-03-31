import {ContactList, Name} from "./contact";

export type Token = string;


export interface MainState {
    token: Token,
    searchingName: Name,
    contactList: ContactList
}

