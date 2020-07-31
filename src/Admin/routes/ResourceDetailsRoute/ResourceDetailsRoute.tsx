import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { action } from 'mobx'
import { inject, observer } from 'mobx-react'

import ResourceDetails from '../../components/ResourceDetails'
import AdminStore from '../../stores/AdminStore'

import {
   goToUpdateResource,
   goToAdminDashboardResources
} from '../../utils/NavigationalUtils'

interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
}
interface ResourceDetailsProps extends InjectedProps {}

@inject('adminStore')
@observer
class ResourceDetailsRoute extends Component<ResourceDetailsProps> {
   getInjectedProps = () => this.props as InjectedProps
   componentDidMount() {
      this.doNetWorkCallForResourceDetails()
      this.doNetWorkCallForResourceItems()
   }
   @action.bound
   getResourceId() {
      const {
         match: { params }
      } = this.getInjectedProps()
      return params['resourceId']
   }
   doNetWorkCallForResourceDetails = () => {
      const {
         adminStore: { getResourceDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      getResourceDetails(requestObject)
   }
   doNetWorkCallForResourceItems = () => {
      const {
         adminStore: { resourceDetailsPaginationStore }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      resourceDetailsPaginationStore.getData()
   }
   @action.bound
   onClickUpdateResource() {
      const { history } = this.props
      window.localStorage.setItem('isOpenedUpdateResourcePage', 'yes')
      goToUpdateResource(history, this.getResourceId())
   }
   @action.bound
   onClickDeleteResource = () => {
      alert('delete')
   }
   onClickResourcesButton = () => {
      const { history } = this.props
      goToAdminDashboardResources(history)
   }
   render() {
      const {
         adminStore: {
            getResourceDetailsAPIStatus,
            getResourceDetailsAPIError,
            resourcesDetailsResponse,
            resourceDetailsPaginationStore
         }
      } = this.getInjectedProps()
      return (
         <ResourceDetails
            doNetWorkCallForResourceDetails={
               this.doNetWorkCallForResourceDetails
            }
            doNetWorkCallForResourceItems={this.doNetWorkCallForResourceItems}
            onClickUpdateResource={this.onClickUpdateResource}
            onClickDeleteResource={this.onClickDeleteResource}
            onClickResourcesButton={this.onClickResourcesButton}
            resourceId={this.getResourceId()}
            getResourceDetailsAPIStatus={getResourceDetailsAPIStatus}
            getResourceDetailsAPIError={getResourceDetailsAPIError}
            resourcesDetailsResponse={resourcesDetailsResponse}
            resourceDetailsPaginationStore={resourceDetailsPaginationStore}
         />
      )
   }
}

export default withRouter(ResourceDetailsRoute)
