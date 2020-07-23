import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { AdminServiceInterface } from '.'
class AdminService implements AdminServiceInterface {
   baseApi
   constructor(parameters) {
      this.baseApi = create({ baseURL: 'https://1d2c1582fff8.ngrok.io/' })
   }
   getResourceListAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
}
export default AdminService
