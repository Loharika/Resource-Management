//import { DASHBOARD_SIGNIN_PAGE } from '../constants/NavigationalConstants'
import React from 'react'
import { Route } from 'react-router-dom'
import { ADMIN_DASHBOARD } from '../../Authentication/constants/NavigationalConstants'
import Dashboard from '../components/Dashboard'

export const AdminDashboardRoutes = [
   <Route exact path={ADMIN_DASHBOARD} component={Dashboard} />
]
