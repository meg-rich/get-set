import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { useAuthListener } from './hooks/useAuthListener'

import { useSubdomain } from './hooks/useSubdomain'
import { selectUserId } from './services/user'
import Login from './containers/Login'
import Home from './containers/Home'

const AuthRoutes = (): JSX.Element | null => {
    const userId = useSelector(selectUserId, shallowEqual)
    console.log(userId)
    console.log('got here')

    if (!userId) {
        return <Redirect to='/login' />
    }
    return (
       <Home />
    )
}

const UnauthRoutes = (): JSX.Element | null => {
    return (
        <>
        <Route path='/login'>
          <Login />
        </Route>
          <Route path='/'>
              <Redirect to='/login' />
          </Route>
        </>
    )
}

export default function App (): JSX.Element {
    const { subdomain: envId } = useSubdomain()
    const { isAuthenticated, isLoading } = useAuthListener(envId)

    console.log(envId)
    console.log(isAuthenticated)

    if (isLoading) {
        return <div>loading</div>
    }
    return (
        <BrowserRouter>
            <Switch>
                {isAuthenticated ? <AuthRoutes /> : <UnauthRoutes />}
                {/* {error && <Redirect to={ROUTES.NOT_FOUND} />}
                <Route path={ROUTES.NOT_FOUND}>
                    <div>not found</div>
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}
