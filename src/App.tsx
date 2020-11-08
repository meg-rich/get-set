import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { useAuthListener } from './hooks/useAuthListener'

import { useSubdomain } from './hooks/useSubdomain'
import { selectUserId } from './services/user'
import Login from './containers/Login'
import Home from './containers/Home'
import { AppTheme } from './styles/theme'

const AuthRoutes = (): JSX.Element | null => {
    const userId = useSelector(selectUserId, shallowEqual)

    if (!userId) {
        return <Redirect to="/login" />
    }
    return <Home />
}

const UnauthRoutes = (): JSX.Element | null => {
    return (
        <>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <Redirect to="/login" />
            </Route>
        </>
    )
}

export default function App(): JSX.Element {
    const { subdomain: envId } = useSubdomain()
    const { isAuthenticated, isLoading } = useAuthListener(envId)

    if (isLoading) {
        return <div>loading</div>
    }
    return (
        <Container>
            <BrowserRouter>
                <Switch>
                    {isAuthenticated ? <AuthRoutes /> : <UnauthRoutes />}
                </Switch>
            </BrowserRouter>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${(props: { theme: AppTheme }) =>
        props.theme.colors.brandBlue};
    width: 100%;
    height: 100%;
`
