import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
    
  body{
    width:100%;
    height:100%;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.bg};
  }
  h1, h2, h3{
    font-family: 'Roboto Condensed', sans-serif;
  }
`;