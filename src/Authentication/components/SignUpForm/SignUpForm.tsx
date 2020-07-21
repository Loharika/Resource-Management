import React, { createRef } from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   FormType,
   FormDashBoard,
   LoginLink,
   LogInPageLink,
   PasswordAlert,
   LogoImageContainer
} from './styledComponents'
import { DASHBOARD_SIGNIN_PAGE } from '../../constants/NavigationalConstants'
import { FormHeading } from '../../styledComponents/styledComponents'

import { InputField } from '../Common/InputField'

import { LogoImage } from '../Common/LogoImage'
import { Button } from '../Common/Button'
import strings from '../../../Common/i18n/strings.json'

interface SignUpFormProps {
   userName: string
   password: string
   confirmPassword: string
   mobileNumber: string
   choosePassword: string
   onChangeUserName: (event: any) => void
   onChangePassword: (event: any) => void
   onChangeMobileNumber: (event: any) => void
   onChangeConfirmPassword: (event: any) => void
   onSubmit: (event: any) => void
   displayError: boolean
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
         mobileNumber,
         choosePassword,
         onChangeUserName,
         onChangePassword,
         onChangeMobileNumber,
         onChangeConfirmPassword,
         onSubmit,
         displayError
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
               <InputField
                  value={mobileNumber}
                  onChange={onChangeMobileNumber}
                  type={'text'}
                  placeholderText={'Mobile Number'}
                  displayError={displayError}
                  label={'MOBILE NUMBER'}
               />
               {choosePassword.length !== 0 ? (
                  <PasswordAlert>{choosePassword}</PasswordAlert>
               ) : (
                  ''
               )}
               <Button
                  buttonText={t('auth:auth.signUp')}
                  onClickFunction={onSubmit}
                  isLoading={false}
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
