export type Name = string;
export type PhoneNumber = string;
export type ContactID = number;

export interface IContact {
    id: ContactID;
    name: Name;
    tel: PhoneNumber;
    isEdit: boolean;
}

export class Contact implements IContact {
    id: ContactID;
    isEdit: boolean;
    name: Name;
    tel: PhoneNumber;

    constructor(id: ContactID, name: Name, tel: PhoneNumber) {
        this.id = id;
        this.name = name;
        this.tel = tel;
        this.isEdit = true
    }
}

export type ContactList = Contact[];