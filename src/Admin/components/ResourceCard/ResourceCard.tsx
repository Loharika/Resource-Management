import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
   ResourceCardStyle,
   ResourceName,
   ResourceImage,
   ResourceLink,
   ResourceService,
   ResourceDescription,
   ResourceLogoWithName,
   ResourceNameService
} from './styledComponents'
import ResourceCardModel from '../../stores/Model/ResourceCardModel'
import { action } from 'mobx'

interface ResourceCardProps {
   resourceDetails: ResourceCardModel
   onClickResourceCard: (resourceId: number) => void
}
@observer
class ResourceCard extends Component<ResourceCardProps> {
   @action.bound
   onClickRequestCard(resourceId) {
      const { onClickResourceCard } = this.props
      onClickResourceCard(resourceId)
   }
   render() {
      const { resourceDetails: details } = this.props
      return (
         <ResourceCardStyle
            key={details.resourceId}
            onClick={() => this.onClickRequestCard(details.resourceId)}
         >
            <ResourceLogoWithName>
               {' '}
               <ResourceImage
                  src={details.resourceImage}
                  alt={details.resourceName}
               />
               <ResourceNameService>
                  <ResourceName>{details.resourceName}</ResourceName>
                  <ResourceService>{details.resourceService}</ResourceService>
               </ResourceNameService>
            </ResourceLogoWithName>

            <ResourceLink href={details.resourceLink}>
               {details.resourceLink}
            </ResourceLink>

            <ResourceDescription>{details.description}</ResourceDescription>
         </ResourceCardStyle>
      )
   }
}

export default ResourceCard
