import {
   ResourcesListResponse,
   ResourcesListRequestObject,
   RequestsListRequestObject,
   RequestsListResponse,
   ResourceDetailsRequestObject,
   ResourcesDetailsResponse,
   ResourcesItemsRequestObject,
   ResourceItemResponse,
   AddResourceRequestObject,
   AddResourceResponse,
   UpdateResourceRequestObject,
   DeleteResourceRequestObject,
   AddResourceItemRequestObject,
   AddResourceItemResponse,
   UpdateResourceItemObject,
   DeleteResourceItemsRequestObject
} from '../../stores/types'

export interface AdminServiceInterface {
   getResourceListAPI: (
      requestObject: ResourcesListRequestObject
   ) => Promise<ResourcesListResponse>
   getRequestListAPI: (
      requestObject: RequestsListRequestObject
   ) => Promise<RequestsListResponse>
   getResourceDetailsAPI: (
      requestObject: ResourceDetailsRequestObject
   ) => Promise<ResourcesDetailsResponse>
   getResourceItemsAPI: (
      requestObject: ResourcesItemsRequestObject
   ) => Promise<ResourceItemResponse>
   addResourceAPI: (
      requestObject: AddResourceRequestObject
   ) => Promise<AddResourceResponse>
   updateResourceAPI: (
      requestObject: UpdateResourceRequestObject
   ) => Promise<{}>
   deleteResourceAPI: (
      requestObject: DeleteResourceRequestObject
   ) => Promise<{}>
   addResourceItemAPI: (
      requestObject: AddResourceItemRequestObject
   ) => Promise<AddResourceItemResponse>
   updateResourceItemAPI: (
      requestObject: UpdateResourceItemObject
   ) => Promise<{}>
   deleteResourceItemAPI: (
      requestObject: DeleteResourceItemsRequestObject
   ) => Promise<{}>
}
