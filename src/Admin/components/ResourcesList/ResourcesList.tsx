import React, { Component } from 'react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { action, runInAction } from 'mobx'
import ResourceCard from '../ResourceCard'
import { ResourceListStyle } from './styledComponents'

interface ResourcesListProps {
   resourcesListInstance: any
   onClickResourceCard: (resourceId:number) => void
}

@observer
class ResourcesList extends Component<ResourcesListProps> {
   renderSuccessUI = () => {
      const {
         resourcesListInstance: { listOfItems }, onClickResourceCard
      } = this.props
      return (
         <React.Fragment>
            <ResourceListStyle>
               {listOfItems.map(resource => {
                  return (
                     <ResourceCard
                        resourceDetails={resource}
                        key={resource.resourceId}
                        onClickResourceCard={onClickResourceCard}
                     />
                  )
               })}
            </ResourceListStyle>
         </React.Fragment>
      )
   }

   render() {
      const {
         resourcesListInstance: { getApiStatus, getApiError, getListOfItems }
      } = this.props
      const { renderSuccessUI } = this
      return (
         <LoadingWrapperWithFailure
            apiStatus={getApiStatus}
            renderSuccessUI={renderSuccessUI}
            onRetryClick={getListOfItems}
            apiError={getApiError}
         />
      )
   }
}

export default ResourcesList
