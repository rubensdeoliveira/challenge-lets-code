import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
  body, input, textarea, button {
    font-size: 1.6rem;
    font-family: Heebo;
  }
  html {
    font-size: 62.5%;
  }
  button {
    cursor: pointer;
  }
  h1 {
    font-weight: 500;
  }
  [disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
`
