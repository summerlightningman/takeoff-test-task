export type Name = string;
export type PhoneNumber = string;
export type ContactID = number;

export interface Contact {
    id: ContactID,
    name: Name,
    tel: PhoneNumber
}

export type ContactList = Contact[];