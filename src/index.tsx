import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { ThemeProvider } from './styles/ThemeProvider'
import App from './App'
import { store } from './services'

const GlobalStyle = createGlobalStyle`
  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  ${reset}
`

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <>
                    <GlobalStyle />
                    <App />
                </>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
