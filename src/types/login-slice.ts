import {Name} from "./contact";

export type Login = Name;
export type Password = string;
export type Message = string;

export interface LoginState {
    login: Login,
    pass: Password,
    message: Message
}