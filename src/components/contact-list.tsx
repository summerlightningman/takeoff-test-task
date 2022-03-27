import {FC, useEffect} from "react";

import ContactListItem from "./contact-list-item";

import ContactListContainer from "./styled/contact-list-container";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {getContactList} from "../http";
import {setContactList} from "../redux/main-slice";


const ContactList: FC = () => {
    const {token, contactList} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getContactList(token).then(contactList => dispatch(setContactList(contactList)))
    }, [token]);

    return <ContactListContainer>
        {contactList.map((contact) => <ContactListItem {...contact} />)}
    </ContactListContainer>
};

export default ContactList