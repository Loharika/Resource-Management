import React from 'react'
import { observer } from 'mobx-react'
import { InputField } from '../Common/InputField'
import { LogoImage } from '../Common/LogoImage'
import strings from '../../i18n/strings.json'
import { Button } from '../Common/Button'
import { Button as SignInButton } from '../../../Common/components/Button'
import { DASHBOARD_SIGNUP_PAGE } from '../../constants/NavigationalConstants'
import {
   FormType,
   FormDashBoard,
   FormHeading,
   SignUpPageLink,
   LoginLink as SignUpLink,
   LogInDetailsAlert,
   LogoImageContainer,
   SignInButtonCss
} from './styledComponents'
import TextInput from '../Common/TextInput'
import { validateUserName, validatePassword } from '../../utils/ValidationUtils'

type SignInFormProps = {
   userName: string
   password: string
   onChangeUserName: (event: any) => void
   onChangePassword: (event: any) => void
   onSubmit: (event: any) => void
   displayError: boolean
   errorText: string
   isLoading: boolean
}
@observer
class SignInForm extends React.Component<SignInFormProps> {
   userNameField: any
   constructor(props) {
      super(props)
      this.userNameField = React.createRef()
   }
   componentDidMount() {
      this.userNameField.current.setFocus()
   }
   render() {
      const {
         userName,
         password,
         onChangeUserName,
         onChangePassword,
         onSubmit,
         displayError,
         errorText,
         isLoading
      } = this.props

      return (
         <FormDashBoard>
            <FormType>
               <LogoImageContainer>
                  <LogoImage />
               </LogoImageContainer>
               <FormHeading>{strings.signInFormHeading}</FormHeading>
               <TextInput
                  inputText={userName}
                  onChange={onChangeUserName}
                  placeholderText={'Username'}
                  validate={validateUserName}
                  displayError={displayError}
                  label={'USERNAME'}
                  type={'text'}
                  ref={this.userNameField}
               />
               <TextInput
                  inputText={password}
                  onChange={onChangePassword}
                  placeholderText={'Password'}
                  validate={validatePassword}
                  displayError={displayError}
                  label={'Password'}
                  type={'password'}
               />
               {errorText.length !== 0 && isLoading ? (
                  <LogInDetailsAlert>{errorText}</LogInDetailsAlert>
               ) : (
                  ''
               )}
               <SignInButton
                  text={strings.signIn}
                  onClick={onSubmit}
                  disabled={isLoading === true}
                  buttonType={'rectangular'}
                  buttonVariant={'filled'}
                  css={SignInButtonCss}
               />
               <SignUpLink>
                  {strings.signUpLink} &nbsp;{' '}
                  <SignUpPageLink href={DASHBOARD_SIGNUP_PAGE}>
                     &nbsp;{strings.signUpLinkText}
                  </SignUpPageLink>
               </SignUpLink>
            </FormType>
         </FormDashBoard>
      )
   }
}
export { SignInForm }
