import { AdminServiceInterface } from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getResourcesListResponse from '../../fixtures/getResourcesListResponse.json'
import getResourceDetails from '../../fixtures/getResourceDetails.json'
import getResourceItemsList from '../../fixtures/getResourceItemsList.json'
class AdminService implements AdminServiceInterface {
   getResourceListAPI(requestObject) {
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
   getResourceDetailsAPI(requestObject) {
      return resolveWithTimeout(getResourceDetails)
   }
   getResourceItemsAPI(requestObject) {
      return resolveWithTimeout(getResourceItemsList)
   }
   addResourceAPI(requestObject) {
      console.log(requestObject)
      return resolveWithTimeout({ resource_id: 56789 })
   }
   updateResourceAPI(requestObject) {
      return resolveWithTimeout({})
   }
   deleteResourceAPI(requestObject) {
      return resolveWithTimeout({})
   }
   addResourceItemAPI(requestObject) {
      return resolveWithTimeout({ item_id: 5678909 })
   }
   updateResourceItemAPI(requestObject) {
      return resolveWithTimeout({})
   }
   deleteResourceItemAPI(requestObject) {
      return resolveWithTimeout({})
   }
}
export default AdminService
