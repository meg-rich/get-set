import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './containers/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
