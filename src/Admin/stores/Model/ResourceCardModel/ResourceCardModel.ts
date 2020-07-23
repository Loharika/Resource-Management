class ResourceCardModel {
   resourceId: number
   resourceName: string
   resourceLink: string
   description: string
   resourceService: string
   resourceImage: string
   constructor(resource) {
      this.resourceId = resource.resource_id
      this.resourceName = resource.name
      this.resourceLink = resource.link
      this.description = resource.description
      this.resourceService = resource.service
      this.resourceImage = resource.resource_image
   }
}
export default ResourceCardModel
