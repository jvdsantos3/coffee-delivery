import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['yellow-light']};
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.yellow};
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`
