import {Login, Password} from "./types/login-reducer";

const HOST = 'localhost';
const PORT = 4000;
const URL = `http://${HOST}:${PORT}`;
const users_url = URL + '/users'

export const signIn = (login: Login, pass: Password) =>
    fetch(users_url + `?name=${login}&pass=${pass}`)
        .then(resp => resp.json())
        .then(data => data[0].token);