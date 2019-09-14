import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, border-style, #root {
    min-height: 100%;
  }

  body {
    background-color: #7159c1;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
