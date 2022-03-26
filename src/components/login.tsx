import {KeyboardEventHandler, MouseEventHandler} from "react";

import {signIn} from "../http";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setLogin, setPass} from "../redux/login-slice";

import CenteredContent from "./styled/centered-content";
import LoginContainer from "./styled/login-container";
import FormInput from "./styled/form-input";
import FormHeader from "./styled/form-header";
import FormSubmit from "./styled/form-submit";

const Login = () => {
    const {login, pass} = useAppSelector(state => state.login);
    const {token} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    const handleLoginInput: KeyboardEventHandler<HTMLInputElement> = e => {
        dispatch(setLogin(e.currentTarget.value));
    };

    const handlePassInput: KeyboardEventHandler<HTMLInputElement> = e => {
        dispatch(setPass(e.currentTarget.value));
    };

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault();
        // signIn(login, pass)
    };

    return <CenteredContent>
        <LoginContainer>
            <FormHeader>Sign in</FormHeader>
            <FormInput value={login} onInput={handleLoginInput} placeholder="login"/>
            <FormInput value={pass} onInput={handlePassInput} placeholder="password"/>
            <FormSubmit onClick={handleSubmit}>Login</FormSubmit>
        </LoginContainer>
    </CenteredContent>
}

export default Login