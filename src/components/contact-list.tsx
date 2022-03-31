import {FC, useEffect, useState} from "react";

import ContactListItem from "./contact-list-item";

import ContactListContainer from "./styled/contact-list-container";

import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {getContactList} from "../http";
import {setContactList} from "../redux/main-slice";
import ContactListItemSearch from "./contact-list-item-search";
import {Name} from "../types/contact";


const ContactList: FC = () => {
    const {token, contactList} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();
    const [queryPattern, setQueryPattern] = useState<RegExp>(new RegExp(''));

    useEffect(() => {
        if (token)
            getContactList(token).then(contactList => dispatch(setContactList(contactList)));
    }, [token]);

    const updateQuery = (name: Name) => setQueryPattern(new RegExp(`.*${name}.*`));

    const contacts = queryPattern ? contactList.filter(c => c.name.match(queryPattern)) : contactList;

    return <ContactListContainer>
        <ContactListItemSearch onSearch={updateQuery}/>
        {contacts.map((contact) => <ContactListItem {...contact} key={contact.id}/>)}
    </ContactListContainer>
};

export default ContactList