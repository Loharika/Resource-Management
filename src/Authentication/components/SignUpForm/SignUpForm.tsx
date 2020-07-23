import React, { createRef } from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   FormType,
   FormDashBoard,
   LoginLink,
   LogInPageLink,
   PasswordAlert,
   LogoImageContainer,
   SignUpButtonCss
} from './styledComponents'
import { DASHBOARD_SIGNIN_PAGE } from '../../constants/NavigationalConstants'
import { FormHeading } from '../../styledComponents/styledComponents'

import { InputField } from '../Common/InputField'
import { Button as SignUpButton } from '../../../Common/components/Button'

import { LogoImage } from '../Common/LogoImage'
import { Button } from '../Common/Button'
import strings from '../../../Common/i18n/strings.json'

interface SignUpFormProps {
   userName: string
   password: string
   confirmPassword: string
   choosePassword: string
   onChangeUserName: (event: any) => void
   onChangePassword: (event: any) => void
   onChangeConfirmPassword: (event: any) => void
   onSubmit: (event: any) => void
   displayError: boolean
   isLoading: boolean
}

interface SignUpFormProps extends WithTranslation {}
@observer
class SignUpForm extends React.Component<SignUpFormProps> {
   userNameField: any
   constructor(props) {
      super(props)
      this.userNameField = createRef()
   }
   componentDidMount() {
      this.userNameField.current.setFocus()
   }
   render() {
      const { t } = this.props
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
      } = this.props
      return (
         <FormDashBoard>
            <FormType>
               <LogoImageContainer>
                  <LogoImage />
               </LogoImageContainer>
               <FormHeading>{t('auth:auth.signUpFormHeading')}</FormHeading>
               <InputField
                  ref={this.userNameField}
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
               <InputField
                  value={confirmPassword}
                  onChange={onChangeConfirmPassword}
                  type={'password'}
                  placeholderText={'Confirm Password'}
                  displayError={displayError}
                  label={'CONFIRM PASSWORD'}
               />

               {choosePassword.length !== 0 ? (
                  <PasswordAlert>{choosePassword}</PasswordAlert>
               ) : (
                  ''
               )}
               <SignUpButton
                  text={t('auth:auth.signIn')}
                  onClick={onSubmit}
                  disabled={isLoading === true}
                  buttonType={'rectangular'}
                  buttonVariant={'outline'}
                  css={SignUpButtonCss}
               />
               <LoginLink>
                  {t('auth:auth.signInLink')} &nbsp;{' '}
                  <LogInPageLink href={DASHBOARD_SIGNIN_PAGE}>
                     {' '}
                     &nbsp;{strings.auth.signInLinkText}
                  </LogInPageLink>
               </LoginLink>
            </FormType>
         </FormDashBoard>
      )
   }
}
export default withTranslation('translation', { withRef: true })(SignUpForm)
