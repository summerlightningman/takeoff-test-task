import {FC, KeyboardEventHandler, MouseEventHandler} from "react";
import {useNavigate} from "react-router-dom";

import {signIn} from "../http";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setLogin, setMessage, setPass} from "../redux/login-slice";
import {setToken} from "../redux/main-slice";

import CenteredContent from "./styled/centered-content";
import LoginContainer from "./styled/login-container";
import FormInput from "./styled/form-input";
import Header from "./styled/header";
import FormSubmit from "./styled/form-submit";


const Login: FC = () => {
    const {login, pass, message} = useAppSelector(state => state.login);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const clearMessage = () => message && dispatch(setMessage(''));

    const handleLoginInput: KeyboardEventHandler<HTMLInputElement> = e => {
        clearMessage();
        dispatch(setLogin(e.currentTarget.value));
    };

    const handlePassInput: KeyboardEventHandler<HTMLInputElement> = e => {
        clearMessage();
        dispatch(setPass(e.currentTarget.value));
    };

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        signIn(login, pass)
            .then(token => {
                dispatch(setToken(token));
                navigate('/');
            })
            .catch(() => dispatch(setMessage('Login and/or password are not correct')));
    };

    return <CenteredContent>
        <LoginContainer>
            <Header>Sign in</Header>
            <FormInput value={login} onInput={handleLoginInput} placeholder="login"/>
            <FormInput value={pass} onInput={handlePassInput} placeholder="password"/>
            <FormSubmit onClick={handleSubmit}>Login</FormSubmit>
            <span style={{color: 'tomato'}}>{message}</span>
        </LoginContainer>
    </CenteredContent>
}

export default Login