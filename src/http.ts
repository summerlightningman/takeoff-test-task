import {Login, Password} from "./types/login-slice";
import {Token} from "./types/main-slice";

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