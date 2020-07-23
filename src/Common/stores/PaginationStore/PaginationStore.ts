import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class PaginationStore {
   @observable pageNumber!: number
   @observable getApiStatus
   @observable getApiError
   @observable getApiResponse
   @observable results
   @observable totalResults
   @observable sort
   @observable filter
   @observable searchInput
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
      this.results = new Map()
      this.totalResults = 0
      this.sort = 'RECENTLY ADDED' //ASCENDING DESCENDING
      this.filter = ''
   }
   @action.bound
   onChangeFilter(filter) {
      this.filter = filter
   }
   @action.bound
   onChangeSort(sort) {
      this.sort = sort
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
      const listOfModels = apiResponse[this.apiResponseKeys[0]].map(
         listItem => {
            return new this.model(listItem)
         }
      )
      this.results.set(this.pageNumber, listOfModels)
      this.totalResults = apiResponse[this.apiResponseKeys[1]]
   }
   @action.bound
   getData() {
      let requestObject = {
         limit: this.limit - 1,
         offset: (this.pageNumber - 1) * this.limit,
         sort: this.sort,
         filter: this.filter
      }
      let promise = this.apiService(requestObject)
      return bindPromiseWithOnSuccess(promise)
         .to(this.setGetAPIStatus, this.setGetAPIResponse)
         .catch(this.setGetAPIError)
   }
   @action.bound
   onChangePageNumber(pageNumber: number) {
      this.pageNumber = pageNumber
      if (!this.results.has(this.pageNumber)) {
         this.getData()
      }
   }
   @computed
   get totalNumberOfPages() {
      return Math.ceil(this.totalResults / this.limit)
   }
}
export default PaginationStore
