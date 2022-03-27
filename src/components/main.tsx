import {useNavigate} from "react-router-dom";
import {FC, useEffect} from "react";

import ContactList from "./contact-list";

import {useAppSelector} from "../redux/hooks";

import CenteredContent from "./styled/centered-content";
import MainPageContainer from "./styled/main-page-container";
import Header from "./styled/header";

const Main: FC = () => {
    const {token} = useAppSelector(state => state.main);
    const navigate = useNavigate();
    useEffect(() => {
        if (!token)
            navigate('/login');
    });

    return <CenteredContent>
        <MainPageContainer>
            <Header>My Contact book</Header>
            <ContactList/>
        </MainPageContainer>
    </CenteredContent>
}

export default Main