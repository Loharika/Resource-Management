import { action, observable } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import PaginationStore from '../../../Common/stores/PaginationStore'
import ResourceCardModel from '../Model/ResourceCardModel'
import ResourceItemModel from '../Model/ResourceItemModel'
import RequestModel from '../Model/RequestModel'
import UserModel from '../Model/UserModel'
import ResourceModel from '../Model/ResourceModel'
class AdminStore {
   @observable getResourceDetailsAPIStatus
   @observable getResourceDetailsAPIError
   @observable resourcesDetailsResponse

   @observable getResourceItemDetailsAPIStatus
   @observable getResourceItemDetailsAPIError
   @observable resourcesItemDetailsResponse

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

   @observable getPostAcceptedRequestsAPIStatus
   @observable getPostAcceptedRequestsAPIError

   @observable getPostRejectedRequestsAPIStatus
   @observable getPostRejectedRequestsAPIError

   @observable getUserDetailsAPIStatus
   @observable getUserDetailsAPIError
   @observable userDetailsResponse

   adminService
   resourcesListPaginationStore
   resourceDetailsPaginationStore
   requestsListPaginationStore
   usersListPaginationStore
   userAccessableResourcesPaginationStore
   constructor(adminService) {
      this.adminService = adminService
      this.resourcesListPaginationStore = new PaginationStore(
         ResourceCardModel,
         this.adminService.getResourceListAPI,
         ['resources_list', 'total_count'],
         9
      )
      this.requestsListPaginationStore = new PaginationStore(
         RequestModel,
         this.adminService.getRequestListAPI,
         ['requests_list', 'total_count'],
         9
      )
      this.resourceDetailsPaginationStore = new PaginationStore(
         ResourceItemModel,
         this.adminService.getResourceItemsAPI,
         ['resource_items', 'total_count'],
         5
      )
      this.usersListPaginationStore = new PaginationStore(
         UserModel,
         this.adminService.getUsersListAPI,
         ['users_list', 'total_count'],
         5
      )
      this.userAccessableResourcesPaginationStore = new PaginationStore(
         ResourceModel,
         this.adminService.getUserAccessableResourcesAPI,
         ['resource_items', 'total_count'],
         5
      )
      this.init()
   }
   @action.bound
   init() {
      this.intiResourceDetailsAPI()
      this.intiResourceItemDetailsAPI()

      this.initAddResourceAPI()
      this.initUpdateResourceAPI()
      this.initDeleteResourceAPI()

      this.initAddResourceItemAPI()
      this.initUpdateResourceItemAPI()
      this.initDeleteResourceItemAPI()

      this.initAcceptedRequestsAPI()
      this.initRejectedRequestsAPI()

      this.initUserDetailsAPI()
   }
   @action.bound
   intiResourceDetailsAPI() {
      this.getResourceDetailsAPIStatus = API_INITIAL
      this.getResourceDetailsAPIError = null
      this.resourcesDetailsResponse = ''
   }
   @action.bound
   intiResourceItemDetailsAPI() {
      this.getResourceItemDetailsAPIStatus = API_INITIAL
      this.getResourceItemDetailsAPIError = null
      this.resourcesItemDetailsResponse = ''
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
   initAcceptedRequestsAPI() {
      this.getPostAcceptedRequestsAPIStatus = API_INITIAL
      this.getPostAcceptedRequestsAPIError = null
   }
   @action.bound
   initRejectedRequestsAPI() {
      this.getPostRejectedRequestsAPIStatus = API_INITIAL
      this.getPostRejectedRequestsAPIError = null
   }
   @action.bound
   initUserDetailsAPI() {
      this.getUserDetailsAPIStatus = API_INITIAL
      this.getUserDetailsAPIError = null
      this.userDetailsResponse = ''
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
   setGetResourceItemDetailsAPIStatus(apiStatus) {
      this.getResourceItemDetailsAPIStatus = apiStatus
   }
   @action.bound
   setGetResourceItemDetailsAPIResponse(apiResponse) {
      this.resourcesItemDetailsResponse = apiResponse
   }
   @action.bound
   setGetResourceItemDetailsAPIError(apiError) {
      this.getResourceItemDetailsAPIError = apiError
   }
   @action.bound
   getResourceItemDetails(requestObject) {
      const getResourcesItemPromise = this.adminService.getResourceItemDetailsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(getResourcesItemPromise)
         .to(
            this.setGetResourceItemDetailsAPIStatus,
            this.setGetResourceItemDetailsAPIResponse
         )
         .catch(this.setGetResourceItemDetailsAPIError)
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
      const deleteResourceItemPromise = this.adminService.deleteResourceItemAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(deleteResourceItemPromise)
         .to(this.setGetDeleteResourceAPIStatus, () => {})
         .catch(this.setGetDeleteResourceAPIError)
   }
   @action.bound
   setGetPostAcceptedRequestsAPIStatus(apiStatus) {
      this.getPostAcceptedRequestsAPIStatus = apiStatus
   }
   @action.bound
   setGetPostAcceptedRequestsAPIError(apiError) {
      this.getPostAcceptedRequestsAPIError = apiError
   }
   @action.bound
   postAcceptedRequests(requestObject) {
      const acceptedRequestsPromise = this.adminService.postAcceptedRequestsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(acceptedRequestsPromise)
         .to(this.setGetPostAcceptedRequestsAPIStatus, () => {})
         .catch(this.setGetPostAcceptedRequestsAPIError)
   }
   @action.bound
   setGetPostRejectedRequestsAPIStatus(apiStatus) {
      this.getPostRejectedRequestsAPIStatus = apiStatus
   }
   @action.bound
   setGetPostRejectedRequestsAPIError(apiError) {
      this.getPostRejectedRequestsAPIError = apiError
   }
   @action.bound
   postRejectedRequests(requestObject) {
      const rejectedRequestsPromise = this.adminService.postRejectedRequestsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(rejectedRequestsPromise)
         .to(this.setGetPostRejectedRequestsAPIStatus, () => {})
         .catch(this.setGetPostRejectedRequestsAPIError)
   }
   @action.bound
   setGetUserDetailsAPIStatus(apiStatus) {
      this.getUserDetailsAPIStatus = apiStatus
   }
   @action.bound
   setGetUserDetailsAPIResponse(apiResponse) {
      this.userDetailsResponse = apiResponse
   }
   @action.bound
   setGetUserDetailsAPIError(apiError) {
      this.getUserDetailsAPIError = apiError
   }
   @action.bound
   getUserDetails(requestObject) {
      const getUserDetailsPromise = this.adminService.getUserDetailsAPI(
         requestObject
      )
      return bindPromiseWithOnSuccess(getUserDetailsPromise)
         .to(this.setGetUserDetailsAPIStatus, this.setGetUserDetailsAPIResponse)
         .catch(this.setGetUserDetailsAPIError)
   }
}
export default AdminStore
