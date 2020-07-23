import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { DASHBOARD_SIGNIN_PAGE } from '../../constants/NavigationalConstants'
import { goToSignInPage } from '../../utils/NavigationalUtils'
import AuthStore from '../../stores/AuthStore'

interface InjectedProps extends RouteComponentProps {}
interface SignInFormRouteProps extends InjectedProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class SignInFormRoute extends React.Component<SignInFormRouteProps> {
   @observable userName
   @observable password
   @observable confirmPassword
   @observable displayError
   @observable choosePassword
   @observable isLoading
   constructor(props) {
      super(props)
      this.init()
      this.displayError = false
      this.isLoading = false
   }
   init() {
      this.userName = ''
      this.password = ''

      this.confirmPassword = ''
      this.choosePassword = ''
   }
   onSubmit = (event: any) => {
      event.preventDefault()
      let { userName, password, onClickSignUpButton, confirmPassword } = this
      if (
         userName.length === 0 ||
         password.length === 0 ||
         confirmPassword.length === 0
      ) {
         this.displayError = true
      } else if (
         userName.length !== 0 &&
         password.length !== 0 &&
         confirmPassword.length !== 0
      ) {
         this.displayError = false
         if (this.password === this.confirmPassword) {
            onClickSignUpButton()
         } else {
            this.choosePassword = 'Enter valid password'
         }
      }
   }
   onChangeUserName = (event: any) => {
      this.userName = event.target.value
      this.choosePassword = ''
      this.displayError = false
   }
   onChangePassword = (event: any) => {
      this.password = event.target.value
      this.choosePassword = ''
      this.displayError = false
   }
   onChangeConfirmPassword = (event: any) => {
      this.confirmPassword = event.target.value
      this.choosePassword = ''
      this.displayError = false
   }

   getInjectedProps = () => this.props as InjectedProps
   @action.bound
   async onClickSignUpButton() {
      this.isLoading = true
      const {
         authStore: { userSignUp }
      } = this.props
      await userSignUp({ username: this.userName, password: this.password })
      const {
         authStore: { getUserSignUpAPIStatus }
      } = this.props
      if (getUserSignUpAPIStatus === 200) {
         this.isLoading = false
         const { history } = this.getInjectedProps()
         goToSignInPage(history)
         this.init()
      } else {
         this.displayError = true
         this.isLoading = true
      }
   }

   render() {
      const {
         userName,
         password,
         confirmPassword,
         choosePassword,
         onChangeUserName,
         onChangePassword,
         onChangeConfirmPassword,
         onSubmit,
         displayError,
         isLoading
      } = this
      return (
         <SignUpForm
            userName={userName}
            password={password}
            confirmPassword={confirmPassword}
            onChangeUserName={onChangeUserName}
            onChangePassword={onChangePassword}
            onChangeConfirmPassword={onChangeConfirmPassword}
            onSubmit={onSubmit}
            displayError={displayError}
            choosePassword={choosePassword}
            isLoading={isLoading}
         />
      )
   }
}
export default withRouter(SignInFormRoute)
