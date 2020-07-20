/*global expect*/
/*global jest*/

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom/extend-expect'
import AuthService from '../../services/AuthService/index.fixture'
import AuthStore from '../../stores/AuthStore'
import getUserSignInResponse from '../../fixtures/getUserSignUpResponse.json'
import {
   ADMIN_DASHBOARD,
   DASHBOARD_SIGNIN_PAGE,
   DASHBOARD_SIGNUP_PAGE
} from '../../constants/NavigationalConstants'

import SignUpFormRoute from './SignUpFormRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('SignInRoute Tests', () => {
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
            <SignUpFormRoute authStore={authStore} />
         </Router>
      )
      const signInButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.click(signInButton)
   })

   it('should render password empty error message', () => {
      const { getByText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpFormRoute authStore={authStore} />
         </Router>
      )
      let username = 'test-user'
      let usernameField = getByPlaceholderText('Username')
      let signInButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.click(signInButton)
   })

   it('should submit sign-in on press enter', () => {
      const { getByLabelText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpFormRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'
      const confirmPassword = 'test-confirmPassword'
      const mobileNumber = 'test-mobileNumber'
      let usernameField = getByPlaceholderText('Username')
      let passwordField = getByPlaceholderText('Password')
      let confirmPasswordField = getByPlaceholderText('Confirm Password')
      let mobileNumberField = getByPlaceholderText('Mobile Number')
      let signInButton = getByRole('button', { name: 'SIGN UP' })

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.change(confirmPasswordField, {
         target: { value: confirmPassword }
      })
      fireEvent.change(mobileNumberField, { target: { value: mobileNumber } })
      fireEvent.keyPress(signInButton, { key: 'Enter', code: 'Enter' })
   })

   it('should render signInRoute loading state', async () => {
      const { getByLabelText, getByPlaceholderText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpFormRoute authStore={authStore} />
         </Router>
      )
      const username = 'test-user'
      const password = 'test-password'
      const confirmPassword = 'test-confirmPassword'
      const mobileNumber = 'test-mobileNumber'
      let usernameField = getByPlaceholderText('Username')
      let passwordField = getByPlaceholderText('Password')
      let confirmPasswordField = getByPlaceholderText('Confirm Password')
      let mobileNumberField = getByPlaceholderText('Mobile Number')

      let signInButton = getByRole('button', { name: 'SIGN UP' })

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authService.signInAPI = mockSignInAPI

      fireEvent.change(usernameField, { target: { value: username } })
      fireEvent.change(passwordField, { target: { value: password } })
      fireEvent.change(confirmPasswordField, {
         target: { value: confirmPassword }
      })
      fireEvent.change(mobileNumberField, { target: { value: mobileNumber } })
      fireEvent.click(signInButton)

      // getByRole('button', { disabled: true })
   })

   // it('should render signInRoute success state', async () => {
   //    authService = new AuthService()
   //    authStore = new AuthStore(authService)
   //    const history = createMemoryHistory()
   //    const route = DASHBOARD_SIGNUP_PAGE
   //    history.push(route)

   //    const { getByRole, queryByRole, getByTestId } = render(
   //       <Provider {...authStore}>
   //          <Router history={history}>
   //             <Route path={DASHBOARD_SIGNUP_PAGE}>
   //                <SignUpFormRoute authStore={authStore} />
   //             </Route>
   //             <Route path={DASHBOARD_SIGNIN_PAGE}>
   //                <LocationDisplay />
   //             </Route>
   //          </Router>
   //       </Provider>
   //    )
   //    const signInButton = getByRole('button', { name: 'SIGN UP' })

   //    const mockSuccessPromise = new Promise(function(resolve, reject) {
   //       resolve(getUserSignInResponse)
   //    })
   //    const mockSignInAPI = jest.fn()
   //    mockSignInAPI.mockReturnValue(mockSuccessPromise)
   //    authService.signInAPI = mockSignInAPI
   //    fireEvent.click(signInButton)

   //    await waitFor(() => {
   //       expect(
   //          queryByRole('button', { name: 'SIGN UP' })
   //       ).not.toBeInTheDocument()
   //       expect(getByTestId('location-display')).toHaveTextContent(
   //          DASHBOARD_SIGNIN_PAGE
   //       )
   //    })
   // })
   // it('should render signUpRoute failure state', async () => {
   //    const { getByText, getByRole } = render(
   //       <Router history={createMemoryHistory()}>
   //          <SignUpFormRoute authStore={authStore} />
   //       </Router>
   //    )
   //    const signInButton = getByRole('button', { name: 'SIGN UP' })

   //    const mockFailurePromise = new Promise(function(resolve, reject) {
   //       reject(new Error('error'))
   //    }).catch(() => {})
   //    const mockSignInAPI = jest.fn()
   //    mockSignInAPI.mockReturnValue(mockFailurePromise)
   //    authService.signInAPI = mockSignInAPI
   //    fireEvent.click(signInButton)

   //    await waitFor(() => {
   //       getByText(/server-error/i)
   //    })
   // })
})
