import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

import { store } from './services'
import { GlobalStyle } from './styles'
import { ThemeProvider } from './styles/ThemeProvider'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <>
                    <Helmet>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600&display=swap"
                            rel="stylesheet"
                        />
                    </Helmet>
                    <GlobalStyle />
                    <App />
                </>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
