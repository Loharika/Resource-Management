import { ResourcesListResponse, ResourcesListRequestObject } from '../../stores/types'

export interface AdminServiceInterface {
   getResourceListAPI: (requestObject:ResourcesListRequestObject) => Promise<ResourcesListResponse>
}
