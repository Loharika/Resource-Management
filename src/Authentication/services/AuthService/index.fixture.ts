import AuthServiceInterface from './index'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getUserSignInResponse from '../../fixtures/getUserSignUpResponse.json'
import getUserProfileDetails from '../../fixtures/userProfile.fixture.json'
class AuthService implements AuthServiceInterface {
   userSignUpAPI(userDetails) {
      return resolveWithTimeout({})
   }
   userSignInAPI(userDetails) {
      return resolveWithTimeout(getUserSignInResponse)
   }
   getProfileDetailsAPI(userDetails) {
      return resolveWithTimeout(getUserProfileDetails)
   }
   updateProfileDetailsAPI(userDetails) {
      return resolveWithTimeout({})
   }
   changePasswordAPI(userDetails) {
      return resolveWithTimeout({})
   }
   signOutAPI(userDetails) {
      return resolveWithTimeout({})
   }
}
export default AuthService
