export interface UserSignUpRequestObject {
   username: string
   password: string
}

export interface UserSignInRequestObject {
   username: string
   password: string
}

export interface GetProfileDetailsRequestObject {
   user_id: number
}

export interface UpdateProfileDetailsRequestObject {
   user_id: number
   username: string
   name: string
   profile_pic: string
   job_role: string
   gender: string
   date_of_birth: string
   department: string
}

export interface ChangePasswordRequestObject {
   user_id: number
   password: string
}
export interface SignOutRequestObject {
   user_id: number
}

export interface UserSignInResponseObject {
   user_id: number
   access_token: string
   refresh_token: string
   expires_in: string
   is_admin: boolean
}

export interface UserProfileDetailsResponseObject {
   username: string
   name: string
   profile_pic: string
   job_role: string
   gender: string
   date_of_birth: string
   department: string
}

//-->SignInForm

//username->string
//password->string -->requestObject

//{
//user_id->integer
//access_token->string
//refresh_token->string
//expires_in->string
//is_admin->boolean
//}

//response:{

//}

//-->SignUpForm

//username->string
//password->string

//201->signInForm

//response{
//already existsSync
//}

//-->UserProfile

//user_id-->requestObject

//username->string
//name->string
//profile_pic->string
//job_role
//gender
//date_of_birth
//department-->response

//->updateProfileDetails

//user_id
//username->string
//name->string
//profile_pic->string
//job_role->string
//gender->string
//date_of_birth->string
//department -->requestObject

//->changePassword

//user_id
//password-->requestObject

//response{
//statusCode-->200
//}

//->signOut

//user_id--requestObject

//response[
//statusCode->200
//]
