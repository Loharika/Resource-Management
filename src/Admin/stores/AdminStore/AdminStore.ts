import { action, observable } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
import PaginationStore from '../../../Common/stores/PaginationStore'
import ResourceCardModel from '../Model/ResourceCardModel'

class AdminStore {
   @observable getResourceDetailsAPIStatus
   @observable getResourceDetailsAPIError
   @observable resourcesDetailsResponse
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
      this.intiResourceDetailsAPI()
   }
   @action.bound
   intiResourceDetailsAPI() {
      this.getResourceDetailsAPIStatus = API_INITIAL
      this.getResourceDetailsAPIError = null
      this.resourcesDetailsResponse = ''
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
}
export default AdminStore
