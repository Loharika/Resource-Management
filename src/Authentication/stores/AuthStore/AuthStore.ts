import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

import {
   getAccessToken,
   setAccessToken,
   clearUserSession
} from '../../../Common/utils/StorageUtils'
class AuthStore {
   @observable getUserSignInAPIStatus
   @observable getUserSignInAPIError
   @observable access_token
   @observable getUserSignInAPIResponse

   @observable getUserSignUpAPIStatus
   @observable getUserSignUpAPIError

   @observable getUserSignOutAPIStatus
   @observable getUserSignOutAPIError

   @observable getChangePasswordAPIStatus
   @observable getChangePasswordAPIError

   @observable getUserProfileDetailsStatus
   @observable getUserProfileDetailsError
   @observable getUserProfileDetailsResponse

   @observable getUpdateProfileDetailsStatus
   @observable getUpdateProfileDetailsError

   authService
   constructor(authService) {
      this.initUserSignInAPI()
      this.initUserProfileDetailsAPI()
      this.authService = authService
   }
   @action.bound
   initUserSignInAPI() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null
      this.access_token = getAccessToken()
   }
   @action.bound
   initUserSignUpAPI() {
      this.getUserSignUpAPIStatus = API_INITIAL
      this.getUserSignUpAPIError = null
   }
   @action.bound
   initUserSignOutAPI() {
      this.getUserSignOutAPIStatus = API_INITIAL
      this.getUserSignOutAPIError = null
   }
   @action.bound
   initUserProfileDetailsAPI() {
      this.getUserProfileDetailsStatus = API_INITIAL
      this.getUserProfileDetailsError = null
      this.getUserProfileDetailsResponse = ''
   }
   @action.bound
   initUpdateProfileDetailsAPI() {
      this.getUpdateProfileDetailsStatus = API_INITIAL
      this.getUpdateProfileDetailsError = null
   }
   @action.bound
   initChangePasswordAPI() {
      this.getChangePasswordAPIStatus = API_INITIAL
      this.getChangePasswordAPIError = null
   }
   @action.bound
   setUserSignInAPIResponse(signInResponse) {
      const access_token = signInResponse.access_token
      setAccessToken(access_token)
      this.access_token = access_token
      this.getUserSignInAPIResponse = signInResponse
   }
   @action.bound
   setGetUserSignInAPIError(apiError) {
      this.getUserSignInAPIError = apiError
   }
   @action.bound
   setGetUserSignInAPIStatus(apiStatus) {
      this.getUserSignInAPIStatus = apiStatus
   }
   @action.bound
   userSignIn(userDetails) {
      let signInPromise = this.authService.userSignInAPI(userDetails)
      return bindPromiseWithOnSuccess(signInPromise)
         .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)

         .catch(this.setGetUserSignInAPIError)
   }
   @action.bound
   setUserSignUpAPIResponse(signUpResponse) {}
   @action.bound
   setGetUserSignUpAPIError(apiError) {
      this.getUserSignUpAPIError = apiError
   }
   @action.bound
   setGetUserSignUpAPIStatus(apiStatus) {
      this.getUserSignUpAPIStatus = apiStatus
   }

   @action.bound
   userSignUp(userDetails) {
      let signUpPromise = this.authService.userSignUpAPI(userDetails)
      return bindPromiseWithOnSuccess(signUpPromise)
         .to(this.setGetUserSignUpAPIStatus, () => {})
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setGetUserProfileDetailsStatus(apiStatus) {
      this.getUserProfileDetailsStatus = apiStatus
   }
   @action.bound
   setGetUserProfileDetailsError(apiError) {
      this.getUserProfileDetailsError = apiError
   }
   @action.bound
   setGetUserProfileDetailsResponse(apiResponse) {
      this.getUserProfileDetailsResponse = apiResponse
   }
   @action.bound
   getUserProfileDetails(userDetails) {
      this.initUserProfileDetailsAPI()
      let userDetailsRequestPromise = this.authService.getProfileDetailsAPI(
         userDetails
      )
      return bindPromiseWithOnSuccess(userDetailsRequestPromise)
         .to(
            this.setGetUserProfileDetailsStatus,
            this.setGetUserProfileDetailsResponse
         )
         .catch(this.setGetUserProfileDetailsError)
   }

   @action.bound
   setGetUpdateProfileDetailsStatus(apiStatus) {
      this.getUpdateProfileDetailsStatus = apiStatus
   }
   @action.bound
   setGetUpdateProfileDetailsError(apiError) {
      this.getUpdateProfileDetailsError = apiError
   }
   @action.bound
   setGetUpdateProfileDetailsResponse(apiResponse) {
      this.getUserProfileDetailsResponse = apiResponse
   }
   @action.bound
   getUpdateProfileDetails(userDetails) {
      this.initUpdateProfileDetailsAPI()
      let userDetailsRequestPromise = this.authService.updateProfileDetailsAPI(
         userDetails
      )
      return bindPromiseWithOnSuccess(userDetailsRequestPromise)
         .to(
            this.setGetUpdateProfileDetailsStatus,
            this.setGetUpdateProfileDetailsResponse
         )
         .catch(this.setGetUpdateProfileDetailsError)
   }

   @action.bound
   setChangePasswordAPIResponse(signUpResponse) {}
   @action.bound
   setChangePasswordAPIError(apiError) {
      this.getChangePasswordAPIError = apiError
   }
   @action.bound
   setGetChangePasswordAPIStatus(apiStatus) {
      this.getChangePasswordAPIStatus = apiStatus
   }

   @action.bound
   userChangePassword(userDetails) {
      this.initChangePasswordAPI()
      let userChangePasswordPromise = this.authService.changePasswordAPI(
         userDetails
      )
      return bindPromiseWithOnSuccess(userChangePasswordPromise)
         .to(
            this.setGetChangePasswordAPIStatus,
            this.setChangePasswordAPIResponse
         )
         .catch(this.setChangePasswordAPIError)
   }

   @action.bound
   setUserSignOutAPIResponse(signUpResponse) {}
   @action.bound
   setGetUserSignOutAPIError(apiError) {
      this.getUserSignOutAPIError = apiError
   }
   @action.bound
   setGetUserSignOutAPIStatus(apiStatus) {
      this.getUserSignOutAPIStatus = apiStatus
   }

   @action.bound
   userSignOut(userDetails) {
      let signOutPromise = this.authService.signOutAPI(userDetails)
      return bindPromiseWithOnSuccess(signOutPromise)
         .to(this.setGetUserSignOutAPIStatus, this.setUserSignOutAPIResponse)
         .catch(this.setGetUserSignOutAPIError)
   }
}
export default AuthStore
