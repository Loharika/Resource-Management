//import { DASHBOARD_SIGNIN_PAGE } from '../constants/NavigationalConstants'
import React from 'react'
import { Route } from 'react-router-dom'
import { USER_DASHBOARD } from '../../Authentication/constants/NavigationalConstants'
import Dashboard from '../components/Dashboard'

export const UserDashboardRoutes = [
   <Route exact path={USER_DASHBOARD} component={Dashboard} />
]
