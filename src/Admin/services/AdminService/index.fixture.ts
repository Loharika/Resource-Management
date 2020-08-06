import { AdminServiceInterface } from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getResourcesListResponse from '../../fixtures/getResourcesListResponse.json'
import getResourceDetails from '../../fixtures/getResourceDetails.json'
import getResourceItemsList from '../../fixtures/getResourceItemsList.json'
import getResourceItemDetails from '../../fixtures/getResourceItemDetails.json'
import getRequestsListDetails from '../../fixtures/getRequestsListDetails.json'
import getUsersListResponse from '../../fixtures/getUsersListResponse.json'
class AdminService implements AdminServiceInterface {
   getResourceListAPI(requestObject) {
      // console.log(requestObject)
      let endIndex = requestObject.limit + requestObject.offset + 1
      let startIndex = requestObject.offset
      let response = {
         resources_list: getResourcesListResponse.resources_list.slice(
            startIndex,
            endIndex
         ),
         total_count: getResourcesListResponse.total_count
      }
      return resolveWithTimeout(response)
   }
   getRequestListAPI(requestObject) {
      let endIndex = requestObject.limit + requestObject.offset + 1
      let startIndex = requestObject.offset
      let response = {
         requests_list: getRequestsListDetails.requests_list.slice(
            startIndex,
            endIndex
         ),
         total_count: getRequestsListDetails.total_count
      }
      return resolveWithTimeout(response)
   }
   getUsersListAPI(requestObject) {
      // console.log(requestObject)
      let endIndex = requestObject.limit + requestObject.offset + 1
      let startIndex = requestObject.offset
      let response = {
         users_list: getUsersListResponse.users_list.slice(
            startIndex,
            endIndex
         ),
         total_count: getUsersListResponse.total_count
      }
      return resolveWithTimeout(response)
   }
   getResourceDetailsAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout(getResourceDetails)
   }
   getResourceItemDetailsAPI(requestObject) {
      return resolveWithTimeout(getResourceItemDetails)
   }
   getResourceItemsAPI(requestObject) {
      // console.log(requestObject)
      // console.log(window.localStorage.getItem('resourceId'))
      let endIndex = requestObject.limit + requestObject.offset + 1
      let startIndex = requestObject.offset
      let response = {
         resource_items: getResourceItemsList.resource_items.slice(
            startIndex,
            endIndex
         ),
         total_count: getResourceItemsList.total_count
      }
      return resolveWithTimeout(response)
   }
   addResourceAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({ resource_id: 56789 })
   }
   updateResourceAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({})
   }
   deleteResourceAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({})
   }
   addResourceItemAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({ item_id: 5678909 })
   }
   updateResourceItemAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({})
   }
   deleteResourceItemAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({})
   }
   postAcceptedRequestsAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({})
   }
   postRejectedRequestsAPI(requestObject) {
      // console.log(requestObject)
      return resolveWithTimeout({})
   }
}
export default AdminService
