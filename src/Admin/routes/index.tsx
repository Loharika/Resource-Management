//import { DASHBOARD_SIGNIN_PAGE } from '../constants/NavigationalConstants'
import React from 'react'

import {
   ADMIN_DASHBOARD_RESOURCES,
   ADMIN_DASHBOARD_REQUESTS,
   ADMIN_DASHBOARD_USERS,
   ADD_RESOURCE,
   UPDATE_RESOURCE,
   ADD_RESOURCE_ITEM,
   UPDATE_RESOURCE_ITEM,
   ADMIN_RESOURCE_DETAILS
} from '../../Authentication/constants/NavigationalConstants'

import { ProtectedRoute } from '../../Common/components/ProtectedRoute'
import DashboardRoute from './DashboardRoute'
import ResourceDetailsRoute from './ResourceDetailsRoute'
import AddResource from '../components/AddResource'
import UpdateResource from '../components/UpdateResource'
import UpdateResourceItem from '../components/UpdateResourceItem/UpdateResourceItem'
import AddResourceItem from '../components/AddResourceItem'
import UpdateResourceRoute from './UpdateResourceRoute'
import UpdateResourceItemRoute from './UpdateResourceItemRoute'

export const AdminDashboardRoutes = [
   <ProtectedRoute
      key={ADMIN_DASHBOARD_RESOURCES}
      exact
      path={ADMIN_DASHBOARD_RESOURCES}
      component={DashboardRoute}
   />,
   <ProtectedRoute
      key={ADMIN_DASHBOARD_REQUESTS}
      exact
      path={ADMIN_DASHBOARD_REQUESTS}
      component={DashboardRoute}
   />,
   <ProtectedRoute
      key={ADMIN_DASHBOARD_USERS}
      exact
      path={ADMIN_DASHBOARD_USERS}
      component={DashboardRoute}
   />,
   <ProtectedRoute
      key={ADD_RESOURCE}
      exact
      path={ADD_RESOURCE}
      component={AddResource}
   />,
   <ProtectedRoute
      key={Math.random()}
      exact
      path={UPDATE_RESOURCE + '/:resourceId'}
      component={UpdateResourceRoute}
   />,
   <ProtectedRoute
      key={ADD_RESOURCE_ITEM}
      exact
      path={ADD_RESOURCE_ITEM}
      component={AddResourceItem}
   />,
   // <ProtectedRoute
   //    key={ADMIN_DASHBOARD_RESOURCES}
   //    exact
   //    path={ADMIN_DASHBOARD_RESOURCES + '/:resourceId'}
   //    component={ResourceDetailsRoute}
   // />,
   <ProtectedRoute
      key={ADMIN_DASHBOARD_RESOURCES}
      path={ADMIN_RESOURCE_DETAILS}
      component={ResourceDetailsRoute}
   />,
   <ProtectedRoute
      key={UPDATE_RESOURCE_ITEM}
      exact
      path={UPDATE_RESOURCE_ITEM + '/:resourceItemId'}
      component={UpdateResourceItemRoute}
   />
]
