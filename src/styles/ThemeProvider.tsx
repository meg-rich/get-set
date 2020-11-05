import React from 'react'
import { ThemeProvider as DefaultThemeProvider } from 'styled-components'
import { theme } from './theme'
import { ThemeContext } from './ThemeContext'

export interface ThemeProviderProps {
    children: JSX.Element
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element{
    return (
        <DefaultThemeProvider theme={theme}>
            <ThemeContext.Provider value={theme}>
                { children }
            </ThemeContext.Provider>
        </DefaultThemeProvider>
    )
}