import React, { Suspense } from 'react'
import { Provider, observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import HomePage from './Common/components/HomePage'
import { AdminDashboardRoutes } from './Admin/routes'
import { UserDashboardRoutes } from './User/routes'
import { AuthenticationRoutes } from './Authentication/routes'

import stores from './Common/stores'
import './App.css'
import i18n from './Common/i18n'

const App = observer(() => {
   return (
      <Provider {...stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div />}>
               <Router basename={process.env.PUBLIC_URL}>
                  {' '}
                  <Switch>
                     {AuthenticationRoutes}
                     {AdminDashboardRoutes}
                     {UserDashboardRoutes}
                     <Route exact path='/'>
                        <HomePage />
                     </Route>
                  </Switch>
               </Router>
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
})

export default App
