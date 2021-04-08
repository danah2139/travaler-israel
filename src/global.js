import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    overflow:auto;
    background: ${({ theme }) => theme.primaryWhite};
    color: ${({ theme }) => theme.primaryDark};
    height: 100vh;
    text-rendering: optimizeLegibility;
	  font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
  }

  
`;
