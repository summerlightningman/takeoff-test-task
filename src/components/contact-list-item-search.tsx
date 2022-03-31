import {FC, KeyboardEventHandler, useEffect} from "react";
import FormInput from "./styled/form-input";
import ContactListItemSearchContainer from "./styled/contact-list-item-search-container";
import {ContactListItemSearchProps} from "../types/contact-list-item-search";
import {setSearchingName} from "../redux/main-slice";
import {useAppDispatch, useAppSelector} from "../redux/hooks";


const ContactListItemSearch: FC<ContactListItemSearchProps> = ({onSearch}) => {
    const {searchingName} = useAppSelector(state => state.main);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(searchingName);
        }, 2000);

        return () => clearTimeout(timeout)
    })

    const handleInput: KeyboardEventHandler<HTMLInputElement> = e => {
        dispatch(setSearchingName(e.currentTarget.value));
    };

    return <ContactListItemSearchContainer>
        <FormInput
            onInput={handleInput}
            value={searchingName}
            placeholder="Type contact name and wait..."
        />
    </ContactListItemSearchContainer>
};

export default ContactListItemSearch