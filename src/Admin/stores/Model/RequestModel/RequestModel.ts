class RequestModel {
   personName: string
   resource: string
   item: string
   accessLevel: string
   dueDateTime: string
   constructor(requestDetails) {
      this.personName = requestDetails.person_name
      this.resource = requestDetails.resource
      this.item = requestDetails.item
      this.accessLevel = requestDetails.access_level
      this.dueDateTime = requestDetails.due_date_time
   }
}
export default RequestModel
