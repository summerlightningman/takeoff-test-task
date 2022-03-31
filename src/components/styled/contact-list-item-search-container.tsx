import ContactListItemContainer from "./contact-list-item-container";
import styled from "styled-components";
import FormInput from "./form-input";

const ContactListItemSearchContainer = styled(ContactListItemContainer)`
  height: 50px;

  ${FormInput} {
    width: 100%;
  }
`;

export default ContactListItemSearchContainer