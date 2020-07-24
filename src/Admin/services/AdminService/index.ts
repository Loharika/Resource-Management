import {
   ResourcesListResponse,
   ResourcesListRequestObject,
   ResourceDetailsRequestObject,
   ResourcesDetailsResponse,
   ResourcesItemsRequestObject,
   ResourceItemResponse
} from '../../stores/types'

export interface AdminServiceInterface {
   getResourceListAPI: (
      requestObject: ResourcesListRequestObject
   ) => Promise<ResourcesListResponse>
   getResourceDetailsAPI: (
      requestObject: ResourceDetailsRequestObject
   ) => Promise<ResourcesDetailsResponse>
   getResourceItemsAPI: (
      requestObject: ResourcesItemsRequestObject
   ) => Promise<ResourceItemResponse>
}
