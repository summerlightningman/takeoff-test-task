import {Login, Password} from "./types/login-slice";
import {Token} from "./types/main-slice";
import {Contact, ContactID} from "./types/contact";
import replaceById from "./helpers/replace-by-id";
import deleteById from "./helpers/delete-by-id";

const HOST = 'localhost';
const PORT = 4000;
const URL = `http://${HOST}:${PORT}`;
const users_url = URL + '/users';

const getUserByToken = (token: Token) => fetch(`${users_url}?token=${token}`)
    .then(resp => resp.json())
    .then(data => data[0])
    .catch(() => alert(`User with token ${token} not found :(`));


export const signIn = async (login: Login, pass: Password) =>
    fetch(`${users_url}?name=${login}&pass=${pass}`)
        .then(resp => resp.json())
        .then(data => data[0].token);

export const getContactList = async (token: Token) =>
    getUserByToken(token)
        .then(user => user.contactList)
        .catch(() => `User with token ${token} hasn't contacts`);

export const patchContactList = async (token: Token, contact: Contact) =>
    getUserByToken(token)
        .then(({id, contactList}) => {
            const body = {
                contactList: replaceById(contactList, contact)
            };
            return fetch(`${users_url}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        });

export const deleteContact = async (token: Token, contactId: ContactID) =>
    getUserByToken(token)
        .then(({id, contactList}) => {
            const body = {
                contactList: deleteById(contactList, contactId)
            };
            return fetch(`${users_url}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
        .catch((e) => console.log(e));