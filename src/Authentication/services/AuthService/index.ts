import {
   UserSignInRequestObject,
   UserSignInResponseObject,
   UserSignUpRequestObject,
   GetProfileDetailsRequestObject,
   UserProfileDetailsResponseObject,
   UpdateProfileDetailsRequestObject,
   ChangePasswordRequestObject,
   SignOutRequestObject
} from '../../stores/types'

interface AuthServiceInterface {
   userSignUpAPI: (userDetails: UserSignUpRequestObject) => Promise<any>
   userSignInAPI: (
      userDetails: UserSignInRequestObject
   ) => Promise<UserSignInResponseObject>
   getProfileDetailsAPI: (
      userDetails: GetProfileDetailsRequestObject
   ) => Promise<UserProfileDetailsResponseObject>
   updateProfileDetailsAPI: (
      userDetails: UpdateProfileDetailsRequestObject
   ) => Promise<any>
   changePasswordAPI: (userDetails: ChangePasswordRequestObject) => Promise<any>
   signOutAPI: (userDetails: SignOutRequestObject) => Promise<any>
}

export default AuthServiceInterface
