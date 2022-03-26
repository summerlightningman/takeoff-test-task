import CenteredContent from "./styled/centered-content";
import LoginContainer from "./styled/login-container";
import FormInput from "./styled/form-input";
import FormHeader from "./styled/form-header";
import FormSubmit from "./styled/form-submit";

const Login = () => {

    return <CenteredContent>
        <LoginContainer>
            <FormHeader>Sign in</FormHeader>
            <FormInput placeholder="login"/>
            <FormInput placeholder="password"/>
            <FormSubmit>Login</FormSubmit>
        </LoginContainer>
    </CenteredContent>
}

export default Login