export interface ResourcesListRequestObject {
   limit: number
   offset: number
   sort: string
   filter: string
}
export interface ResourcesListResponseObject {
   resource_id: number
   name: string
   link: string
   description: string
   service: string
   resource_image: string
}

export interface ResourcesListResponse {
   resources_list: Array<ResourcesListResponseObject>
   total_count: number
}
export interface ResourceDetailsRequestObject {
   resource_id: number
}
export interface RequestsListRequestObject {
   limit: number
   offset: number
   sort: string
   filter: string
}
export interface RequestsListResponseObject {
   request_id: number
   person_name: string
   resource: string
   item: string
   access_level: string
   due_date_time: string
}
export interface RequestsListResponse {
   requests_list: Array<RequestsListResponseObject>
   total_count: number
}
export interface ResourcesDetailsResponse {
   resource_id: number
   name: string
   link: string
   description: string
   service: string
   resource_image: string
}
export interface ResourcesItemsRequestObject
   extends ResourceDetailsRequestObject {}
export interface ResourceItemObject {
   item_id: number
   title: string
   description: string
   link: string
}
export interface ResourceItemResponse {
   resource_items: Array<ResourceItemObject>
   total_count: number
}

export interface AddResourceRequestObject {
   name: string
   link: string
   description: string
   service: string
   resource_image: string
}
export interface AddResourceResponse {
   resource_id: number
}
export interface UpdateResourceRequestObject {
   resourceId: number //resource_id
   resourceDetails: {
      name: string
      link: string
      description: string
      service: string
      resource_image: string
   }
}
export interface DeleteResourceRequestObject {
   resource_id: number
}
export interface AddResourceItemRequestObject {
   name: string
   link: string
   description: string
}
export interface AddResourceItemResponse {
   item_id: number
}
export interface UpdateResourceItemObject {
   resourceItemId: number //item_id
   resourceItemDetails: {
      name: string
      link: string
      description: string
   }
}
export interface DeleteResourceItemsRequestObject {
   item_ids: Array<number>
}
export interface PostAcceptedRequestsRequestObject {
   request_ids: Array<String>
}
export interface PostRejectedRequestsRequestObject {
   reason: string
   request_ids: Array<String>
}

export interface UsersListRequestObject {
   limit: number
   offset: number
   sort: string
   filter: string
}
export interface UsersListResponseObject {
   user_id: number
   name: string
   department: string
   job_role: string
}
export interface UsersListResponse {
   users_list: Array<UsersListResponseObject>
   total_count: number
}
export interface GetUserDetailsRequestObject {
   user_id: number
}
export interface GetUserDetailsResponseObject {
   user_id: number
   user_name: string
   user_image: string
   department: string
   job_role: string
}
export interface GetUserAccessibleResourcesRequestObject {
   limit: number
   offset: number
   sort: string
   filter: string
}
export interface GetUserAccessableResourcesResponseObject {
   resource_id: number
   resource_name: string
   access: string
   description: string
   link: string
}
export interface GetUserAccessibleResourcesResponse {
   resource_items: Array<GetUserAccessableResourcesResponseObject>
   total_count: number
}
//Keys
//limit
//offset
//sort
//sortBy
//filter
//filterBy
//searchInput
