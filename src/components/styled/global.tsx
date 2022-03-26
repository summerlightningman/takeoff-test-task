import {createGlobalStyle} from "styled-components";

const titilliumWebUrl = 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap'

const Global = createGlobalStyle`
  @import url(${titilliumWebUrl});
  
  * {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
  }
`;

export default Global