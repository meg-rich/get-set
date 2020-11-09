import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { AppTheme } from './theme'

export interface StyledProps {
    theme: AppTheme
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600&display=swap');

  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    p, h1, h2, h3, h4, 
    h5, h6, input, button {
        font-family: 'Libre Franklin', sans-serif;
    }
  }

  ${reset}
`
