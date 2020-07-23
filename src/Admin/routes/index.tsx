//import { DASHBOARD_SIGNIN_PAGE } from '../constants/NavigationalConstants'
import React from 'react'

import {
   ADMIN_DASHBOARD_RESOURCES,
   ADMIN_DASHBOARD_REQUESTS,
   ADMIN_DASHBOARD_USERS
} from '../../Authentication/constants/NavigationalConstants'

import { ProtectedRoute } from '../../Common/components/ProtectedRoute'
import DashboardRoute from './DashboardRoute'
import ResourceDetails from '../components/ResourceDetails'

export const AdminDashboardRoutes = [
   <ProtectedRoute
      exact
      path={ADMIN_DASHBOARD_RESOURCES}
      component={DashboardRoute}
   />,
   <ProtectedRoute
      exact
      path={ADMIN_DASHBOARD_REQUESTS}
      component={DashboardRoute}
   />,
   <ProtectedRoute
      exact
      path={ADMIN_DASHBOARD_USERS}
      component={DashboardRoute}
   />,
   <ProtectedRoute
      exact
      path={ADMIN_DASHBOARD_RESOURCES + '/:resourceId'}
      component={ResourceDetails}
   />
]
