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

//Keys
//limit
//offset
//sort
//sortBy
//filter
//filterBy
//searchInput
