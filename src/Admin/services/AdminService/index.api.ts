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
   getRequestListAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   getUsersListAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   getResourceDetailsAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   getResourceItemsAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   addResourceAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   updateResourceAPI(requestObject) {
      const resourceId = requestObject.resourceId
      const resourceDetails = requestObject.resourceDetails
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   deleteResourceAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.delete)
   }
   addResourceItemAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   updateResourceItemAPI(requestObject) {
      const resourceItemId = requestObject.resourceItemId
      const resourceItemDetails = requestObject.resourceItemDetails
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   deleteResourceItemAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.delete)
   }
   postAcceptedRequestsAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   postRejectedRequestsAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   getUserDetailsAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
   getUserAccessableResourcesAPI(requestObject) {
      return networkCallWithApisauce(this.baseApi, '___', {}, apiMethods.get)
   }
}
export default AdminService
