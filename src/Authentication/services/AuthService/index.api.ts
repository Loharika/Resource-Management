import { action } from 'mobx'
import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants.js'

import AuthServiceInterface from './index'
class AuthService implements AuthServiceInterface {
   baseApi
   constructor() {
      this.baseApi = create({
         baseURL: 'https://1d2c1582fff8.ngrok.io/'
      })
   }
   userSignUpAPI(userDetails) {
      return networkCallWithApisauce(
         this.baseApi,
         '__',
         userDetails,
         apiMethods.post
      )
   }
   userSignInAPI(userDetails) {
      return networkCallWithApisauce(
         this.baseApi,
         '__',
         userDetails,
         apiMethods.post
      )
   }
   getProfileDetailsAPI(userDetails) {
      return networkCallWithApisauce(
         this.baseApi,
         '__',
         userDetails,
         apiMethods.get
      )
   }
   updateProfileDetailsAPI(userDetails) {
      return networkCallWithApisauce(
         this.baseApi,
         '__',
         userDetails,
         apiMethods.post
      )
   }
   changePasswordAPI(userDetails) {
      return networkCallWithApisauce(
         this.baseApi,
         '__',
         userDetails,
         apiMethods.post
      )
   }
   signOutAPI(userDetails) {
      return networkCallWithApisauce(
         this.baseApi,
         '__',
         userDetails,
         apiMethods.post
      )
   }
}
export default AuthService
