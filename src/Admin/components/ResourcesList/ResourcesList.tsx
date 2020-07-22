import React, { Component } from 'react'
import { observer } from "mobx-react"
interface ResourcesListProps{
   getResourceListAPIError:any
      getResourceListAPIStatus:any
}

@observer
class ResourcesList extends Component<ResourcesListProps> {
   render() {
      return <div>ResourcesList</div>
   }
}

export default ResourcesList
