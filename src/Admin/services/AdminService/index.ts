import { ResourcesListResponse } from '../../stores/types'

export interface AdminServiceInterface {
   getResourceListAPI: () => Promise<ResourcesListResponse>
}
