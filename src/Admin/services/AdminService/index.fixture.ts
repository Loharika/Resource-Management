import { AdminServiceInterface } from '.'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import getResourcesListResponse from '../../fixtures/getResourcesListResponse.json'

class AdminService implements AdminServiceInterface {
   getResourceListAPI() {
      console.log('fixture')
      return resolveWithTimeout(getResourcesListResponse)
   }
}
export default AdminService
