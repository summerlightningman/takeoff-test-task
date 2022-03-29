import {FC, KeyboardEventHandler, useState} from "react";
import {ContactListItemProps} from "../types/contact-list-item";
import {Name, PhoneNumber} from "../types/contact";
import ContactListItemContainer from "./styled/contact-list-item-container";
import ContactInfoContainer from "./styled/contact-info-container";
import ContactInfo from "./styled/contact-info";
import ControlContainer from "./styled/control-container";
import {MdOutlineEdit, MdOutlineEditOff, MdDeleteOutline, MdOutlineSave} from "react-icons/md";
import ControlButton from "./styled/control-button";
import FormInput from "./styled/form-input";

const ContactListItem: FC<ContactListItemProps> = ({id, name, tel}) => {
    const [tempName, setTempName] = useState<Name>(name);
    const [tempTel, setTempTel] = useState<PhoneNumber>(tel);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const toggleEditMode = () => setIsEdit(!isEdit);
    const handleTempNameInput: KeyboardEventHandler<HTMLInputElement> = e =>
        setTempName(e.currentTarget.value);
    const handleTempTelInput: KeyboardEventHandler<HTMLInputElement> = e =>
        setTempTel(e.currentTarget.value);

    const save = () => {
        setTempName(name);
        setTempTel(tel);
        setIsEdit(false);
    }

    if (isEdit)
        return <ContactListItemContainer>
            <ContactInfoContainer>
                <FormInput value={tempName} onInput={handleTempNameInput}/>
                <FormInput value={tempTel} onInput={handleTempTelInput}/>
            </ContactInfoContainer>
            <ControlContainer>
                <ControlButton onClick={save}><MdOutlineSave size="25px"/></ControlButton>
                <ControlButton onClick={toggleEditMode}><MdOutlineEditOff size="25px"/></ControlButton>
            </ControlContainer>
        </ContactListItemContainer>

    return <ContactListItemContainer>
        <ContactInfoContainer>
            <ContactInfo>{tempName}</ContactInfo>
            <ContactInfo>{tempTel}</ContactInfo>
        </ContactInfoContainer>
        <ControlContainer>
            <ControlButton onClick={toggleEditMode}><MdOutlineEdit size="25px"/></ControlButton>
            <ControlButton><MdDeleteOutline size="25px"/></ControlButton>
        </ControlContainer>
    </ContactListItemContainer>
};

export default ContactListItem