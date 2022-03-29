import styled from "styled-components";

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: darkgrey;
  border: none;
  color: white;
  
  box-shadow: -4px 4px #373737;
  transform: translate(-4px, 4px);
  
  &:hover {
    transform: translate(-8px, 8px);
    box-shadow: none;
    cursor: pointer;
  }
  
  &:active {
    color: #F7CAC9;
  }
`;

export default ControlButton