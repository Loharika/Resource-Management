import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants.js'

import AuthServiceInterface from './index'
class AuthService implements AuthServiceInterface {
   baseApi: Record<string, any>
   constructor() {
      this.baseApi = create({
         baseURL: 'http://2a5bffc1267a.ngrok.io/api/resource_management_user'
         //baseURL: 'http://488561d7d98e.ngrok.io/api/resource_management_user'
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
      console.log(userDetails)
      //const obj = { username: 'harika', password: '12345' }
      const obj = { username: 'rithvik', password: '1@3456789' }
      return networkCallWithApisauce(
         this.baseApi,
         '/login/v1/',
         obj,
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
