import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

interface K {}
interface V {}
class PaginationStore {
   @observable pageNumber!: number
   @observable getApiStatus!: number
   @observable getApiError!: any
   @observable getApiResponse!: object
   @observable results!: Map<K, V>
   @observable totalResults!: number
   @observable sort!: string
   @observable sortBy!: string
   @observable filter!: string
   @observable filterBy!: string
   @observable searchInput!: string
   apiService: (requestObject: object) => Promise<any>
   limit: number
   apiResponseKeys: Array<any>
   model: any
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
      this.sort = ''
      this.sortBy = ''
      this.filter = ''
      this.filterBy = ''
      this.searchInput = ''
   }
   @action.bound
   onChangeFilter(filter) {
      this.filter = filter
   }
   @action.bound
   onChangeFilterBy(filterBy) {
      this.filterBy = filterBy
   }
   @action.bound
   onChangeSort(sort) {
      this.sort = sort
   }
   @action.bound
   onChangeSortBy(sortBy) {
      this.sortBy = sortBy
   }
   @action.bound
   onChangeSearchInput(searchInput) {
      this.searchInput = searchInput
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
