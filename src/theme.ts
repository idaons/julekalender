import { createGlobalStyle } from "styled-components";

export const theme = {
  background: "#091B43", //"#10484b",
  lukeSize: "12rem",
};

export const GlobalStyles = createGlobalStyle`
  body, html {
    background-color: ${theme.background};
    color: white;
    font-family: 'Baloo Da 2', cursive;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lobster Two', cursive;
    letter-spacing: .1em;
  }
`;
