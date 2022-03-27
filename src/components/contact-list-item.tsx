import {FC} from "react";
import {ContactListItemProps} from "../types/contact-list-item";

const ContactListItem: FC<ContactListItemProps> = ({id, name, tel, isEdit}) => {
    return <h1>ContactListItem works!</h1>
};

export default ContactListItem