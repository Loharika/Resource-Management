class ResourceItemModel {
   resourceItemId: number
   resourceItemTitle: string
   resourceItemLink: string
   description: string
   constructor(resource) {
      this.resourceItemId = resource.item_id
      this.resourceItemTitle = resource.title
      this.resourceItemLink = resource.link
      this.description = resource.description
   }
}
export default ResourceItemModel
