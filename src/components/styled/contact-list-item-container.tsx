import styled from "styled-components";

const ContactListItemContainer = styled.li`
  border-bottom: 1px solid darkgrey;
  height: 100px;
  list-style-type: none;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 15px;
  background: #F7CAC9;
  
  &:first-child {
    border-radius: 20px 20px 0 0;
  }
`;

export default ContactListItemContainer