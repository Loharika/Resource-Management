/*global expect*/
/*global jest*/

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import AuthService from '../../services/AuthService/index.fixture'
import AuthStore from '../../stores/AuthStore/index'
import getUserLogInResponse from '../../fixtures/getUserSignUpResponse.json'
import {
   ADMIN_DASHBOARD,
   USER_DASHBOARD,
   DASHBOARD_SIGNIN_PAGE,
   DASHBOARD_SIGNUP_PAGE
} from '../../constants/NavigationalConstants'

import SignInFormRoute from './SignInFormRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('SignInFormRoute Tests', () => {
   let authService
   let authStore

   beforeEach(() => {
      authService = new AuthService()
      authStore = new AuthStore(authService)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username and password empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInFormRoute authStore={authStore} />
         </Router>
      )
      const logInButton = getByRole('button', { name: 'SIGN IN' })

      fireEvent.click(logInButton)
   })

   it('should render password empty error message', () => {
      const { getByText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInFormRoute authStore={authStore} />
         </Router>
      )
      let username = 'test-user'
      let usernameField = getByPlaceholderText('Username')
      let logInButton = getByRole('button', { name: 'SIGN IN' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(logInButton)
   })

   it('should submit log-in on press enter', () => {
      const { getByLabelText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInFormRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      let usernameField = getByPlaceholderText('Username')
      let passwordField = getByPlaceholderText('Password')
      let logInButton = getByRole('button', { name: 'SIGN IN' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.keyPress(logInButton, { key: 'Enter', code: 'Enter' })
   })

   it('should render logInRoute loading state', async () => {
      const { getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignInFormRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'

      let usernameField = getByPlaceholderText('Username')
      let passwordField = getByPlaceholderText('Password')
      let logInButton = getByRole('button', { name: 'SIGN IN' })

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const userSignInAPI = jest.fn()
      userSignInAPI.mockReturnValue(mockLoadingPromise)
      authService.logInAPI = userSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.click(logInButton)

      //getByRole('button', { disabled: true })
   })

   // it('should render logInRoute success state', async () => {
   //    const history = createMemoryHistory()
   //    const route = DASHBOARD_SIGNIN_PAGE
   //    history.push(route)

   //    const { getByRole, debug, queryByRole, getByTestId } = render(
   //       <Provider {...authStore}>
   //          <Router history={history}>
   //             <Route path={DASHBOARD_SIGNIN_PAGE}>
   //                <SignInFormRoute authStore={authStore} />
   //             </Route>
   //             <Route path={ADMIN_DASHBOARD}>
   //                <LocationDisplay />
   //             </Route>
   //          </Router>
   //       </Provider>
   //    )
   //    const logInButton = getByRole('button', { name: 'SIGN IN' })

   //    const mockSuccessPromise = new Promise(function(resolve, reject) {
   //       resolve(getUserLogInResponse)
   //    })
   //    const userSignInAPI = jest.fn()
   //    userSignInAPI.mockReturnValue(mockSuccessPromise)
   //    authService.logInAPI = userSignInAPI
   //    fireEvent.click(logInButton)

   //    waitFor(() => {
   //       expect(
   //          queryByRole('button', { name: 'SIGN IN' })
   //       ).not.toBeInTheDocument()
   //       expect(getByTestId('location-display')).toHaveTextContent(
   //          ADMIN_DASHBOARD
   //       )
   //    })
   // })
   // it('should render SignInRoute failure state', async () => {
   //    const { getByText, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <SignInFormRoute authStore={authStore} />
   //       </Router>
   //    )
   //    const logInButton = getByRole('button', { name: 'SIGN IN' })

   //    const mockFailurePromise = new Promise(function(resolve, reject) {
   //       reject(new Error('error'))
   //    }).catch(() => {})
   //    const userSignInAPI = jest.fn()
   //    userSignInAPI.mockReturnValue(mockFailurePromise)
   //    authService.userSignInAPI = userSignInAPI
   //    fireEvent.click(logInButton)

   //    await waitFor(() => {
   //       getByText(/server-error/i)
   //    })
   // })
})
