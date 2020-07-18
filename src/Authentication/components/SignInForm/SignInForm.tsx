import React from 'react'
import { observer } from 'mobx-react'
import { InputField } from '../Common/InputField'
import { LogoImage } from '../Common/LogoImage'
import strings from '../../i18n/strings.json'
import { Button } from '../Common/Button'

import { DASHBOARD_SIGNUP_PAGE } from '../../constants/NavigationalConstants'
import {
   FormType,
   FormDashBoard,
   FormHeading,
   SignUpPageLink,
   LoginLink as SignUpLink,
   LogInDetailsAlert,
   LogoImageContainer
} from './styledComponents'

type SignInFormProps = {
   userName: string
   password: string
   onChangeUserName: (event: any) => void
   onChangePassword: (event: any) => void
   onSubmit: (event: any) => void
   displayError: boolean
   errorText: string
}
@observer
class SignInForm extends React.Component<SignInFormProps> {
   render() {
      const {
         userName,
         password,
         onChangeUserName,
         onChangePassword,
         onSubmit,
         displayError,
         errorText
      } = this.props
      return (
         <FormDashBoard>
            <FormType>
               <LogoImageContainer>
                  <LogoImage />
               </LogoImageContainer>
               <FormHeading>{strings.signInFormHeading}</FormHeading>
               <InputField
                  value={userName}
                  onChange={onChangeUserName}
                  type={'text'}
                  placeholderText={'Username'}
                  displayError={displayError}
                  label={'USERNAME'}
               />
               <InputField
                  value={password}
                  onChange={onChangePassword}
                  type={'password'}
                  placeholderText={'Password'}
                  displayError={displayError}
                  label={'PASSWORD'}
               />
               {errorText.length !== 0 ? (
                  <LogInDetailsAlert>{errorText}</LogInDetailsAlert>
               ) : (
                  ''
               )}
               <Button buttonText={strings.signIn} onClickFunction={onSubmit} />
               <SignUpLink>
                  {strings.signUpLink} &nbsp;{' '}
                  <SignUpPageLink href={DASHBOARD_SIGNUP_PAGE}>
                     {' '}
                     &nbsp;{strings.signUpLinkText}
                  </SignUpPageLink>
               </SignUpLink>
            </FormType>
         </FormDashBoard>
      )
   }
}
export { SignInForm }
