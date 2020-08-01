import { observable, action } from 'mobx'

class RequestModel {
   requestId: number
   personName: string
   resource: string
   item: string
   @observable accessLevel: string
   dueDateTime: string
   constructor(requestDetails) {
      this.requestId = requestDetails.request_id
      this.personName = requestDetails.person_name
      this.resource = requestDetails.resource
      this.item = requestDetails.item
      this.accessLevel = requestDetails.access_level
      this.dueDateTime = requestDetails.due_date_time
   }
   @action.bound
   updateAccessLevel(accessLevel) {
      console.log(accessLevel)
      this.accessLevel = accessLevel
   }
}
export default RequestModel
