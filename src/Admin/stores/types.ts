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
//addResource
//name
//link
//description
//service
//resource_image
//

//statusCode-201 ==>No Response

//update Resource
//resource_id- (As)  pathParameter
//name
//link
//description
//service
//resource_image

//statusCode-200 ==>No Response

//delResource

//resource_id- (As)  pathParameter

//statusCode-200 ==>No Response

//resources_list:[list of obj]

//resource_id
//name
//link
//description
//service
//resource_image

//total_count:integer

//resources page -->emptyStrings

//Keys
//limit
//offset
//sort
//sortBy
//filter
//filterBy
