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
   userSignUpAPI: (userDetails: UserSignUpRequestObject) => Promise<{}>
   userSignInAPI: (
      userDetails: UserSignInRequestObject
   ) => Promise<UserSignInResponseObject>
   getProfileDetailsAPI: (
      userDetails: GetProfileDetailsRequestObject
   ) => Promise<UserProfileDetailsResponseObject>
   updateProfileDetailsAPI: (
      userDetails: UpdateProfileDetailsRequestObject
   ) => Promise<any>
   changePasswordAPI: (userDetails: ChangePasswordRequestObject) => Promise<{}>
   signOutAPI: (userDetails: SignOutRequestObject) => Promise<{}>
}

export default AuthServiceInterface
