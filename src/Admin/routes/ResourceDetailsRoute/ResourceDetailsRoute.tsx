import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { action, observable, toJS, computed } from 'mobx'
import { inject, observer } from 'mobx-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import ResourceDetails from '../../components/ResourceDetails'
import AdminStore from '../../stores/AdminStore'

import {
   goToUpdateResource,
   goToAdminDashboardResources,
   goToAddResourceItem,
   goToUpdateResourceItem
} from '../../utils/NavigationalUtils'

interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
}
interface ResourceDetailsProps extends InjectedProps {}

@inject('adminStore')
@observer
class ResourceDetailsRoute extends Component<ResourceDetailsProps> {
   @observable selectedResourceItems
   constructor(props) {
      super(props)
      this.selectedResourceItems = []
   }
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
      const {
         history: { location }
      } = this.getInjectedProps()
      // console.log(params)
      // console.log(location.search)
      return params['resourceId']
   }
   @action.bound
   getResourceItemId() {
      const {
         match: { params }
      } = this.getInjectedProps()
      return params['resourceItemId']
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
      window.localStorage.setItem('resourceId', this.getResourceId())
      // console.log(window.localStorage.getItem('resourceId'))
      window.localStorage.setItem('isOpenedUpdateResourcePage', 'yes')
      goToUpdateResource(history, this.getResourceId())
   }
   @action.bound
   async onClickDeleteResource() {
      const {
         adminStore: { deleteResource }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      await deleteResource(requestObject)
      const {
         adminStore: { getDeleteResourceAPIStatus, getDeleteResourceAPIError }
      } = this.getInjectedProps()
      if (getDeleteResourceAPIStatus === 200) {
         const { history } = this.getInjectedProps()
         goToAdminDashboardResources(history)
      } else {
         this.displayToaster(
            getUserDisplayableErrorMessage(getDeleteResourceAPIError)
         )
      }
   }
   onClickAddResourceItem = () => {
      const { history } = this.props
      goToAddResourceItem(history)
   }
   @action.bound
   onClickUpdateResourceItem(resourceItemId) {
      // console.log(resourceItemId)
      // console.log(this.getResourceId())

      const { history } = this.props
      goToUpdateResourceItem(history, resourceItemId)
      window.localStorage.setItem('isOpenedUpdateResourceItemPage', 'yes')
      window.localStorage.setItem('resourceId', this.getResourceId())
   }
   onClickCheckBox = selectedItemId => {
      if (this.selectedResourceItems.includes(selectedItemId)) {
         this.selectedResourceItems = this.selectedResourceItems.filter(
            itemId => itemId !== selectedItemId
         )
      } else {
         this.selectedResourceItems = [
            ...this.selectedResourceItems,
            selectedItemId
         ]
      }
   }
   @action.bound
   async onClickDeleteResourceItems() {
      const {
         adminStore: { deleteResourceItem }
      } = this.getInjectedProps()
      const requestObject = {
         item_ids: this.selectedResourceItems
      }
      await deleteResourceItem(requestObject)
      const {
         adminStore: {
            getDeleteResourceItemAPIError,
            getDeleteResourceItemAPIStatus,
            resourceDetailsPaginationStore
         }
      } = this.getInjectedProps()
      // console.log(getDeleteResourceItemAPIStatus)
      if (getDeleteResourceItemAPIStatus === 200) {
         resourceDetailsPaginationStore.getData()
         // console.log('log')
      }
   }

   displayToaster(status) {
      toast(<div className='text-black font-bold'>{status}</div>, {
         position: 'top-center',
         autoClose: 3000,
         closeButton: false,
         hideProgressBar: true
      })
   }
   onClickResourcesButton = () => {
      const { history } = this.props
      goToAdminDashboardResources(history)
   }
   @computed
   get selectedResourceItemsCount() {
      return this.selectedResourceItems.length
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
            onClickAddResourceItem={this.onClickAddResourceItem}
            onClickDeleteResourceItems={this.onClickDeleteResourceItems}
            onClickCheckBox={this.onClickCheckBox}
            selectedResourceItemsCount={this.selectedResourceItemsCount}
            onClickUpdateResourceItem={this.onClickUpdateResourceItem}
         />
      )
   }
}

export default withRouter(ResourceDetailsRoute)
