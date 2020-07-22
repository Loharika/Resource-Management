import { action, observable } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

class AdminStore {
   @observable getResourceListAPIStatus
   @observable getResourceListAPIError
   @observable resourcesListResponse
   adminService
   constructor(adminService) {
      this.adminService = adminService
      this.intiResourceListAPI()
   }
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
   setGetResourceAPIListError(apiError) {
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
         .catch(this.setGetResourceAPIListError)
   }
}
export default AdminStore
