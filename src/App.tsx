import React from 'react'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './Common/components/HomePage'
import { AdminDashboardRoutes } from './Admin/routes'
import { UserDashboardRoutes } from './User/routes'
import { AuthenticationRoutes } from './Authentication/routes'

import stores from './Common/stores'
import './App.css'

const App = () => {
   return (
      <Router basename={process.env.PUBLIC_URL}>
         <Provider {...stores}>
            {' '}
            <Switch>
               {AuthenticationRoutes}
               {AdminDashboardRoutes}
               {UserDashboardRoutes}
               <Route exact path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Provider>
      </Router>
   )
}

export default App
