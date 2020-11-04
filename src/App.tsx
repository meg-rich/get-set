import React from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './containers/Login'

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route default path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
