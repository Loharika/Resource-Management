import React from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { LogoImage } from '../Common/LogoImage'

import strings from '../../../Common/i18n/strings.json'

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

interface SignInFormProps {
   userName: string
   password: string
   onChangeUserName: (event: any) => void
   onChangePassword: (event: any) => void
   onSubmit: (event: any) => void
   displayError: boolean
   errorText: string
   isLoading: boolean
}
interface SignInFormProps extends WithTranslation {}
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
      const { t } = this.props
      return (
         <FormDashBoard>
            <FormType>
               <LogoImageContainer>
                  <LogoImage />
               </LogoImageContainer>
               <FormHeading>{t('auth:auth.signInFormHeading')}</FormHeading>
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
                  text={t('auth:auth.signIn')}
                  onClick={onSubmit}
                  disabled={isLoading === true}
                  buttonType={'rectangular'}
                  buttonVariant={'outline'}
                  css={SignInButtonCss}
               />
               <SignUpLink>
                  {t('auth:auth.signUpLink')} &nbsp;{' '}
                  <SignUpPageLink href={DASHBOARD_SIGNUP_PAGE}>
                     &nbsp;{strings.auth.signUpLinkText}
                  </SignUpPageLink>
               </SignUpLink>
            </FormType>
         </FormDashBoard>
      )
   }
}
export default withTranslation('translation', { withRef: true })(SignInForm)
