import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class PaginationStore {
   @observable pageNumber!: number
   @observable getApiStatus
   @observable getApiError
   @observable getApiResponse
   @observable listOfItems
   @observable noOfListItems
   apiService
   limit
   apiResponseKeys
   model
   constructor(Model, apiService, apiResponseKeys, limit) {
      this.apiService = apiService
      this.limit = limit
      this.apiResponseKeys = apiResponseKeys
      this.model = Model
      this.init()
   }
   @action.bound
   init() {
      this.pageNumber = 1
      this.getApiStatus = API_INITIAL
      this.getApiError = null
      this.listOfItems = []
      this.noOfListItems = 0
   }
   @action.bound
   setGetAPIStatus(apiStatus) {
      this.getApiStatus = apiStatus
   }
   @action.bound
   setGetAPIError(apiError) {
      this.getApiError = apiError
   }
   @action.bound
   setGetAPIResponse(apiResponse) {
      this.listOfItems = apiResponse[this.apiResponseKeys[0]].map(listItem => {
         return new this.model(listItem)
      })
      this.noOfListItems = apiResponse[this.apiResponseKeys[1]]
   }
   @action.bound
   getListOfItems() {
      let promise = this.apiService()
      return bindPromiseWithOnSuccess(promise)
         .to(this.setGetAPIStatus, this.setGetAPIResponse)
         .catch(this.setGetAPIError)
   }
   @action.bound
   onChangePageNumber(pageNumber: number) {
      this.pageNumber = pageNumber
   }
   @computed
   get totalNumberOfPages() {
      return Math.ceil(this.noOfListItems / this.limit)
   }
}
export default PaginationStore
