/*global jest*/
/*global expect*/
/* Mocking js-cookie library */

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import AuthStore from '.'
import AuthService from '../../services/AuthService/index.fixture'
import getUserSignInResponse from '../../fixtures/getUserSignUpResponse.json'
import getUserProfileData from '../../fixtures/userProfile.fixture.json'

describe('AuthStore Tests Cases', () => {
   let authService
   let authStore

   beforeEach(() => {
      authService = new AuthService()
      authStore = new AuthStore(authService)
   })
   //----------------------------------------
   it('it should intialize the Auth Store ', () => {
      expect(authStore.getUserSignUpAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignUpAPIError).toBeNull()
   })
   it('it should test the SignUpAPI data fetching state ', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()

      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authService.signInAPI = mockSignInAPI

      authStore.userSignUp()
      expect(authStore.getUserSignUpAPIStatus).toBe(API_FETCHING)
   })

   it('it should test the signUpAPI data success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve()
      })
      const mockSignUpAPI = jest.fn()
      mockSignUpAPI.mockReturnValue(mockLoadingPromise)
      authService.signUpAPI = mockSignUpAPI

      await authStore.userSignUp()
      expect(authStore.getUserSignUpAPIStatus).toBe(API_SUCCESS)
   })
   it('it should test the signUpAPI failure state', async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })
      const mockSignUpAPI = jest.fn()
      mockSignUpAPI.mockReturnValue(mockLoadingPromise)
      authService.userSignUpAPI = mockSignUpAPI

      await authStore.userSignUp()
      expect(authStore.getUserSignUpAPIStatus).toBe(API_FAILED)
      expect(authStore.getUserSignUpAPIError).toBe('error')
   })

   it('it should test the SignInAPI data fetching state ', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignInAPI = jest.fn()

      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authService.userSignInAPI = mockSignInAPI

      authStore.userSignIn()
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING)
   })

   it('it should test the signInAPI data success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse)
      })
      const mockSignInAPI = jest.fn()
      mockSignInAPI.mockReturnValue(mockLoadingPromise)
      authService.userSignInAPI = mockSignInAPI

      await authStore.userSignIn()
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS)
   })
   it('it should test the signInAPI failure state', async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })
      const mockSignUpAPI = jest.fn()
      mockSignUpAPI.mockReturnValue(mockLoadingPromise)
      authService.userSignInAPI = mockSignUpAPI

      await authStore.userSignIn()
      expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED)
   })
   //-----------------------------------------------------------------------------------------------
   it('it should intialize the Auth Store User Profile API', () => {
      expect(authStore.getUserProfileDetailsStatus).toBe(API_INITIAL)
      expect(authStore.getUserProfileDetailsError).toBeNull()
   })
   it('it should test the userProfileAPI data fetching state ', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockUpdateUserProfileAPI = jest.fn()
      mockUpdateUserProfileAPI.mockReturnValue(mockLoadingPromise)
      authService.getProfileDetailsAPI = mockUpdateUserProfileAPI
      authStore.getUserProfileDetails()
      expect(authStore.getUserProfileDetailsStatus).toBe(API_FETCHING)
   })

   it('it should test the userProfile data success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserProfileData)
      })
      const mockUpdateUserProfileAPI = jest.fn()
      mockUpdateUserProfileAPI.mockReturnValue(mockLoadingPromise)
      authService.getProfileDetailsAPI = mockUpdateUserProfileAPI
      await authStore.getUserProfileDetails({ userName: 'Harika' })
      expect(authStore.getUserProfileDetailsStatus).toBe(API_SUCCESS)
      expect(authStore.getUserProfileDetailsError).toBe(null)
      expect(authStore.getUserProfileDetailsResponse).toStrictEqual(
         getUserProfileData
      )
   })
   it('it should test the  failure state', async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })
      const mockUpdateUserProfileAPI = jest.fn()
      mockUpdateUserProfileAPI.mockReturnValue(mockLoadingPromise)
      authService.getProfileDetailsAPI = mockUpdateUserProfileAPI
      await authStore.getUserProfileDetails()
      expect(authStore.getUserProfileDetailsError).toBe('error')
   })

   //------------------------------------------------------------------------------------

   it('it should intialize the Auth Store Update User Profile API', () => {
      expect(authStore.getUpdateProfileDetailsStatus).toBe(API_INITIAL)
      expect(authStore.getUpdateProfileDetailsError).toBeNull()
   })
   it('it should test the userUpdateProfileAPI data fetching state ', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockUpdateUserProfileAPI = jest.fn()
      mockUpdateUserProfileAPI.mockReturnValue(mockLoadingPromise)
      authService.updateProfileDetailsAPI = mockUpdateUserProfileAPI
      authStore.getUpdateProfileDetails()
      expect(authStore.getUpdateProfileDetailsStatus).toBe(API_FETCHING)
   })

   it('it should test the userUpdateProfile data success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserProfileData)
      })
      const mockUpdateUserProfileAPI = jest.fn()
      mockUpdateUserProfileAPI.mockReturnValue(mockLoadingPromise)
      authService.updateProfileDetailsAPI = mockUpdateUserProfileAPI
      await authStore.getUpdateProfileDetails()
      expect(authStore.getUpdateProfileDetailsStatus).toBe(API_SUCCESS)
      expect(authStore.getUpdateProfileDetailsError).toBe(null)
   })
   it('it should test the  failure state', async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })
      const mockUpdateUserProfileAPI = jest.fn()
      mockUpdateUserProfileAPI.mockReturnValue(mockLoadingPromise)
      authService.updateProfileDetailsAPI = mockUpdateUserProfileAPI
      await authStore.getUpdateProfileDetails()
      expect(authStore.getUpdateProfileDetailsError).toBe('error')
   })
   //-------------------------------------------------
   it('it should intialize the Auth Store User Profile API', () => {
      expect(authStore.getChangePasswordAPIStatus).toBe(API_INITIAL)
      expect(authStore.getChangePasswordAPIError).toBeNull()
   })
   it('it should test the userChangePassword fetching state ', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockChangePasswordAPI = jest.fn()
      mockChangePasswordAPI.mockReturnValue(mockLoadingPromise)
      authService.userChangePasswordAPI = mockChangePasswordAPI
      authStore.userChangePassword()
      expect(authStore.getChangePasswordAPIStatus).toBe(API_FETCHING)
   })

   it('it should test the userChangePassword success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserProfileData)
      })
      const mockChangePasswordAPI = jest.fn()
      mockChangePasswordAPI.mockReturnValue(mockLoadingPromise)
      authService.userChangePasswordAPI = mockChangePasswordAPI
      await authStore.userChangePassword()
      expect(authStore.getChangePasswordAPIStatus).toBe(API_SUCCESS)
      expect(authStore.getChangePasswordAPIError).toBe(null)
   })
   it('it should test the  userChangePassword failure state', async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })
      const mockChangePasswordAPI = jest.fn()
      mockChangePasswordAPI.mockReturnValue(mockLoadingPromise)
      authService.changePasswordAPI = mockChangePasswordAPI
      await authStore.userChangePassword()
      expect(authStore.getChangePasswordAPIError).toBe('error')
   })
   //------------------------------------------------------
   it('it should intialize the Auth Store ', () => {
      expect(authStore.getUserSignOutAPIStatus).toBe(API_INITIAL)
      expect(authStore.getUserSignOutAPIError).toBeNull()
   })
   it('it should test the SignoutAPI data fetching state ', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockSignOutAPI = jest.fn()

      mockSignOutAPI.mockReturnValue(mockLoadingPromise)
      authService.signOutAPI = mockSignOutAPI

      authStore.userSignOut()
      expect(authStore.getUserSignOutAPIStatus).toBe(API_FETCHING)
   })

   it('it should test the signoutAPI data success state', async () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse)
      })
      const mockSignOutAPI = jest.fn()
      mockSignOutAPI.mockReturnValue(mockLoadingPromise)
      authService.signOutAPI = mockSignOutAPI

      await authStore.userSignOut()
      expect(authStore.getUserSignOutAPIStatus).toBe(API_SUCCESS)
      expect(authStore.getUserSignOutAPIError).toBe(null)
   })
   it('it should test the signoutAPI failure state', async () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {
         reject(new Error('error'))
      })
      const mockSignOutAPI = jest.fn()
      mockSignOutAPI.mockReturnValue(mockLoadingPromise)
      authService.signOutAPI = mockSignOutAPI

      await authStore.userSignOut()
      expect(authStore.getUserSignOutAPIStatus).toBe(API_FAILED)
   })
})
