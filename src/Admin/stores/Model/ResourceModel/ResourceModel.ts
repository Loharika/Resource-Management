class ResourceModel {
   resourceId
   resourceName
   access
   description
   link
   constructor(details) {
      this.resourceId = details.resource_id
      this.resourceName = details.resource_name
      this.access = details.access
      this.description = details.description
      this.link = details.link
   }
}
export default ResourceModel
