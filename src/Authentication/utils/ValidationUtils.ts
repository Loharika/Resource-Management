export function validateUserName(userName) {
   if (userName.length !== 0) {
      if (userName === 'harika') {
         return {
            showErrorMessage: false,
            errorMessage: ''
         }
      }
      return {
         showErrorMessage: true,
         errorMessage: 'invalid username'
      }
   } else {
      return {
         showErrorMessage: true,
         errorMessage: 'Required'
      }
   }
}
export function validatePassword(password) {
   if (password.length !== 0) {
      if (password === '123') {
         return {
            showErrorMessage: false,
            errorMessage: ''
         }
      }
      return {
         showErrorMessage: true,
         errorMessage: 'invalid password'
      }
   } else {
      return {
         showErrorMessage: true,
         errorMessage: 'Required'
      }
   }
}
