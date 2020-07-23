import { action, observable } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, API_FETCHING } from '@ib/api-constants'
import PaginationStore from '../../../Common/stores/PaginationStore'
import ResourceCardModel from '../Model/ResourceCardModel'

class AdminStore {
   @observable getResourceListAPIStatus
   @observable getResourceListAPIError
   @observable resourcesListResponse
   adminService
   resourcesListPaginationStore
   constructor(adminService) {
      this.adminService = adminService
      this.resourcesListPaginationStore = new PaginationStore(
         ResourceCardModel,
         this.adminService.getResourceListAPI,
         ['resources_list', 'total_count'],
         9
      )
      this.intiResourceListAPI()
   }
   @action.bound
   intiResourceListAPI() {
      this.getResourceListAPIStatus = API_INITIAL
      this.getResourceListAPIError = null
      this.resourcesListResponse = []
   }
   @action.bound
   setGetResourceListAPIStatus(apiStatus) {
      this.getResourceListAPIStatus = apiStatus
   }
   @action.bound
   setGetResourceListAPIResponse(apiResponse) {
      this.resourcesListResponse = apiResponse
   }
   @action.bound
   setGetResourceListAPIError(apiError) {
      this.getResourceListAPIError = apiError
   }
   @action.bound
   getResourceList() {
      const getResourcesPromise = this.adminService.getResourceListAPI()
      return bindPromiseWithOnSuccess(getResourcesPromise)
         .to(
            this.setGetResourceListAPIStatus,
            this.setGetResourceListAPIResponse
         )
         .catch(this.setGetResourceListAPIError)
   }
}
export default AdminStore
