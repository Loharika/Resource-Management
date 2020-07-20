import {
   DASHBOARD_SIGNIN_PAGE,
   DASHBOARD_SIGNUP_PAGE
} from '../constants/NavigationalConstants'
import React from 'react'
import { Route } from 'react-router-dom'

import SignInFormRoute from './SignInFormRoute/SignInFormRoute'
import SignUpFormRoute from './SignUpFormRoute/SignUpFormRoute'

export const AuthenticationRoutes = [
   <Route exact path={DASHBOARD_SIGNIN_PAGE} component={SignInFormRoute} />,
   <Route exact path={DASHBOARD_SIGNUP_PAGE} component={SignUpFormRoute} />
]
