import { action, observable } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import PaginationStore from '../../../Common/stores/PaginationStore'
import ResourceCardModel from '../Model/ResourceCardModel'

class AdminStore {
   @observable getResourceDetailsAPIStatus
   @observable getResourceDetailsAPIError
   @observable resourcesDetailsResponse

   @observable getAddResourceAPIStatus
   @observable getAddResourceAPIError
   @observable getAddResourceAPIResponse

   @observable getUpdateResourceAPIStatus
   @observable getUpdateResourceAPIError

   @observable getDeleteResourceAPIStatus
   @observable getDeleteResourceAPIError

   @observable getAddResourceItemAPIStatus
   @observable getAddResourceItemAPIError
   @observable getAddResourceItemAPIResponse

   @observable getUpdateResourceItemAPIStatus
   @observable getUpdateResourceItemAPIError

   @observable getDeleteResourceItemAPIStatus
   @observable getDeleteResourceItemAPIError
   adminService
   resourcesListPaginationStore
   resourceDetailsPaginationStore
   constructor(adminService) {
      this.adminService = adminService
      this.resourcesListPaginationStore = new PaginationStore(
         ResourceCardModel,
         this.adminService.getResourceListAPI,
         ['resources_list', 'total_count'],
         9
      )
      // this.resourceDetailsPaginationStore = new PaginationStore(

      // )
      this.init()
   }
   @action.bound
   init() {
      this.intiResourceDetailsAPI()

      this.initAddResourceAPI()
      this.initUpdateResourceAPI()
      this.initDeleteResourceAPI()

      this.initAddResourceItemAPI()
      this.initUpdateResourceItemAPI()
      this.initDeleteResourceItemAPI()
   }
   @action.bound
   intiResourceDetailsAPI() {
      this.getResourceDetailsAPIStatus = API_INITIAL
      this.getResourceDetailsAPIError = null
      this.resourcesDetailsResponse = ''
   }
   @action.bound
   initAddResourceAPI() {
      this.getAddResourceAPIStatus = API_INITIAL
      this.getAddResourceAPIError = null
      this.getAddResourceAPIResponse = ''
   }
   @action.bound
   initUpdateResourceAPI() {
      this.getUpdateResourceAPIStatus = API_INITIAL
      this.getUpdateResourceAPIError = null
   }
   @action.bound
   initDeleteResourceAPI() {
      this.getDeleteResourceAPIStatus = API_INITIAL
      this.getDeleteResourceAPIError = null
   }

   @action.bound
   initAddResourceItemAPI() {
      this.getAddResourceItemAPIStatus = API_INITIAL
      this.getAddResourceItemAPIError = null
      this.getAddResourceItemAPIResponse = ''
   }
   @action.bound
   initUpdateResourceItemAPI() {
      this.getUpdateResourceItemAPIStatus = API_INITIAL
      this.getUpdateResourceItemAPIError = null
   }
   @action.bound
   initDeleteResourceItemAPI() {
      this.getDeleteResourceItemAPIStatus = API_INITIAL
      this.getDeleteResourceItemAPIError = null
   }
   @action.bound
   setGetResourceDetailsAPIStatus(apiStatus) {
      this.getResourceDetailsAPIStatus = apiStatus
   }
   @action.bound
   setGetResourceDetailsAPIResponse(apiResponse) {
      this.resourcesDetailsResponse = apiResponse
   }
   @action.bound
   setGetResourceDetailsAPIError(apiError) {
      this.getResourceDetailsAPIError = apiError
   }
   @action.bound
   getResourceDetails(requestObject) {
      const getResourcesPromise = this.adminService.getResourceDetailsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(getResourcesPromise)
         .to(
            this.setGetResourceDetailsAPIStatus,
            this.setGetResourceDetailsAPIResponse
         )
         .catch(this.setGetResourceDetailsAPIError)
   }
   @action.bound
   setGetAddResourceAPIStatus(apiStatus) {
      this.getAddResourceAPIStatus = apiStatus
   }
   @action.bound
   setGetAddResourceAPIError(apiError) {
      this.getAddResourceAPIStatus = apiError
   }
   @action.bound
   setGetAddResourceAPIResponse(apiResponse) {
      this.getAddResourceAPIStatus = apiResponse
   }
   @action.bound
   addResource(requestObject) {
      console.log(requestObject)
      const addResourcePromise = this.adminService.addResourceAPI(requestObject)
      return bindPromiseWithOnSuccess(addResourcePromise)
         .to(this.setGetAddResourceAPIStatus, this.setGetAddResourceAPIResponse)
         .catch(this.setGetAddResourceAPIError)
   }
   @action.bound
   setGetUpdateResourceAPIStatus(apiStatus) {
      this.getUpdateResourceAPIStatus = apiStatus
   }
   @action.bound
   setGetUpdateResourceAPIError(apiError) {
      this.getUpdateResourceAPIStatus = apiError
   }
   @action.bound
   updateResource(requestObject) {
      const updateResourcePromise = this.adminService.updateResourceAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(updateResourcePromise)
         .to(this.setGetUpdateResourceAPIStatus, () => {})
         .catch(this.setGetUpdateResourceAPIError)
   }
   @action.bound
   setGetDeleteResourceAPIStatus(apiStatus) {
      this.getDeleteResourceAPIStatus = apiStatus
   }
   @action.bound
   setGetDeleteResourceAPIError(apiError) {
      this.getDeleteResourceAPIStatus = apiError
   }
   @action.bound
   deleteResource(requestObject) {
      const deleteResourcePromise = this.adminService.deleteResourceAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(deleteResourcePromise)
         .to(this.setGetDeleteResourceAPIStatus, () => {})
         .catch(this.setGetDeleteResourceAPIError)
   }
   @action.bound
   setGetAddResourceItemAPIStatus(apiStatus) {
      this.getAddResourceItemAPIStatus = apiStatus
   }
   @action.bound
   setGetAddResourceItemAPIError(apiError) {
      this.getAddResourceItemAPIStatus = apiError
   }
   @action.bound
   setGetAddResourceItemAPIResponse(apiResponse) {
      this.getAddResourceItemAPIStatus = apiResponse
   }
   @action.bound
   addResourceItem(requestObject) {
      const addResourceItemPromise = this.adminService.addResourceItemAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(addResourceItemPromise)
         .to(
            this.setGetAddResourceItemAPIStatus,
            this.setGetAddResourceItemAPIResponse
         )
         .catch(this.setGetAddResourceItemAPIError)
   }
   @action.bound
   setGetUpdateResourceItemAPIStatus(apiStatus) {
      this.getUpdateResourceItemAPIStatus = apiStatus
   }
   @action.bound
   setGetUpdateResourceItemAPIError(apiError) {
      this.getUpdateResourceItemAPIStatus = apiError
   }
   @action.bound
   updateResourceItem(requestObject) {
      const updateResourceItemPromise = this.adminService.updateResourceItemAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(updateResourceItemPromise)
         .to(this.setGetUpdateResourceItemAPIStatus, () => {})
         .catch(this.setGetUpdateResourceItemAPIError)
   }
   @action.bound
   setGetDeleteResourceItemAPIStatus(apiStatus) {
      this.getDeleteResourceItemAPIStatus = apiStatus
   }
   @action.bound
   setGetDeleteResourceItemAPIError(apiError) {
      this.getDeleteResourceItemAPIStatus = apiError
   }
   @action.bound
   deleteResourceItem(requestObject) {
      const deleteResourceItemPromise = this.adminService.deleteResourceAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(deleteResourceItemPromise)
         .to(this.setGetDeleteResourceAPIStatus, () => {})
         .catch(this.setGetDeleteResourceAPIError)
   }
}
export default AdminStore
