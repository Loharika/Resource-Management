import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { DASHBOARD_SIGNIN_PAGE } from '../../../Authentication/constants/NavigationalConstants'
import { getAccessToken } from '../../utils/StorageUtils'

const ProtectedRoute = observer(
   ({ component: Component, history, path, ...rest }) => {
      let accessToken = getAccessToken()
      return (
         <Route
            {...rest}
            render={props => {
               if (accessToken !== undefined) {
                  return <Component />
               } else {
                  return (
                     <Redirect
                        to={{
                           pathname: DASHBOARD_SIGNIN_PAGE
                        }}
                     />
                  )
               }
            }}
         />
      )
   }
)
export { ProtectedRoute }
