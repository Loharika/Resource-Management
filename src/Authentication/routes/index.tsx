import {
   DASHBOARD_SIGNIN_PAGE,
   DASHBOARD_SIGNUP_PAGE,
   DASHBOARD_USERPROFILE
} from '../constants/NavigationalConstants'
import React from 'react'
import { Route } from 'react-router-dom'

import SignInFormRoute from './SignInFormRoute/SignInFormRoute'
import SignUpFormRoute from './SignUpFormRoute/SignUpFormRoute'

import UserProfileRoute from './UserProfileRoute/UserProfileRoute'

export const AuthenticationRoutes = [
   <Route exact path={DASHBOARD_SIGNIN_PAGE} component={SignInFormRoute} />,
   <Route exact path={DASHBOARD_SIGNUP_PAGE} component={SignUpFormRoute} />,
   <Route exact path={DASHBOARD_USERPROFILE} component={UserProfileRoute} />
]
