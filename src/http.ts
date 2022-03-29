import {Login, Password} from "./types/login-slice";
import {Token} from "./types/main-slice";
import {Contact} from "./types/contact";
import replaceById from "./helpers/replace-by-id";

const HOST = 'localhost';
const PORT = 4000;
const URL = `http://${HOST}:${PORT}`;
const users_url = URL + '/users';

export const signIn = (login: Login, pass: Password) =>
    fetch(users_url + `?name=${login}&pass=${pass}`)
        .then(resp => resp.json())
        .then(data => data[0].token);

export const getContactList = (token: Token) =>
    fetch(users_url + `?token=${token}`)
        .then(resp => resp.json())
        .then(data => data[0].contactList);

export const patchContactList = (token: Token, contact: Contact) =>
    fetch(users_url + `?token=${token}`)
        .then(resp => resp.json())
        .then(data => {
            const {id, contactList} = data[0];
            const body = {
                contactList: replaceById(contactList, contact)
            };
            return fetch(users_url + `/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        });