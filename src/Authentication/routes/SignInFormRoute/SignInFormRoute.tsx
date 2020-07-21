import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom'

import { SignInForm } from '../../components/SignInForm'

import {
   goToAdminDashboard,
   goToUserDashboard
} from '../../utils/NavigationalUtils'
import AuthStore from '../../stores/AuthStore/index'

interface InjectedProps extends RouteComponentProps {}
interface SignInFormRouteProps extends InjectedProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class SignInFormRoute extends React.Component<SignInFormRouteProps> {
   @observable userName
   @observable password
   @observable displayError
   @observable errorText
   @observable userNameErrorText
   @observable isLoading
   constructor(props) {
      super(props)
      this.init()
      this.displayError = false
      this.isLoading = false
   }

   init = () => {
      this.userName = ''
      this.password = ''
      this.errorText = ''
   }
   onSubmit = (event: any) => {
      event.preventDefault()
      let { userName, password } = this
      if (userName.length !== 0 && password.length !== 0) {
         this.displayError = false
         this.onClickLogInButton(this.userName, this.password)
      } else {
         this.displayError = true
         this.errorText = 'invalid Credentials'
      }
   }
   onChangeUserName = (event: any) => {
      this.userName = event.target.value
      this.displayError = false
      this.errorText = ''
   }
   onChangePassword = (event: any) => {
      this.password = event.target.value
      this.displayError = false
      this.errorText = ''
   }
   getInjectedProps = () => this.props as InjectedProps

   @action.bound
   async onClickLogInButton(userName: string, password: string) {
      this.isLoading = true

      const {
         authStore: { userSignIn }
      } = this.props
      await userSignIn({ username: userName, password: password })
      const {
         authStore: { access_token, getUserSignInAPIResponse }
      } = this.props
      console.log(getUserSignInAPIResponse)
      if (access_token) {
         this.isLoading = false
         this.init()
         const { history } = this.getInjectedProps()
         if (getUserSignInAPIResponse.is_admin) {
            goToAdminDashboard(history)
         } else {
            goToUserDashboard(history)
         }
      } else {
         this.displayError = true
         this.isLoading = true
      }
   }

   render() {
      let {
         userName,
         password,
         onChangeUserName,
         onChangePassword,
         errorText,
         onSubmit,
         displayError,
         isLoading
      } = this
      return (
         <SignInForm
            userName={userName}
            password={password}
            onChangeUserName={onChangeUserName}
            onChangePassword={onChangePassword}
            onSubmit={onSubmit}
            displayError={displayError}
            errorText={errorText}
            isLoading={isLoading}
         />
      )
   }
}
export default withRouter(SignInFormRoute)
