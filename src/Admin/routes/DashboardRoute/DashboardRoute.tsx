import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action, computed } from 'mobx'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { ADMIN_RESOURCE_DETAILS } from '../../../Authentication/constants/NavigationalConstants'
import Dashboard from '../../components/Dashboard'
import ResourcesList from '../../components/ResourcesList'
import RequestsListRoute from '../RequestsListRoute'
import UsersList from '../../components/UsersList'

import AdminStore from '../../stores/AdminStore'

import {
   goToAdminDashboardResources,
   goToAdminDashboardRequests,
   goToAdminDashboardUsers,
   goToAddResourcePage,
   goToResourceDetails
} from '../../utils/NavigationalUtils'
import RequestsList from '../../components/RequestsList'
import { Typo14WhiteHKGroteskSemiBold } from '../../../Common/styleGuides/Typos'

interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
   history: any
}

interface DashboardRouteProps extends InjectedProps {}
@inject('authStore', 'adminStore')
@observer
class DashboardRoute extends Component<DashboardRouteProps> {
   @observable selector: string

   constructor(props) {
      super(props)
      this.selector = this.getSelectedTab()
   }
   componentDidMount() {
      this.doNetWorkCallsForResourceList()
   }
   getInjectedProps = () => this.props as InjectedProps
   doNetWorkCallsForResourceList() {
      const {
         adminStore: {
            resourcesListPaginationStore: { getData }
         }
      } = this.props
      getData()
   }
   doNetWorkCallsForRequestsList() {
      const {
         adminStore: {
            requestsListPaginationStore: { getData }
         }
      } = this.props
      getData()
   }
   @action.bound
   getSelectedTab() {
      const {
         history: { location }
      } = this.props
      return location.pathname.split('/')[
         location.pathname.split('/').length - 1
      ]
   }
   @action.bound
   onClickResources() {
      const { history } = this.getInjectedProps()
      goToAdminDashboardResources(history)
      this.selector = this.getSelectedTab()
      this.doNetWorkCallsForResourceList()
   }
   @action.bound
   onClickRequests() {
      const { history } = this.getInjectedProps()
      goToAdminDashboardRequests(history)
      this.selector = this.getSelectedTab()
      this.doNetWorkCallsForRequestsList()
   }
   @action.bound
   onClickUsers() {
      const { history } = this.getInjectedProps()
      goToAdminDashboardUsers(history)
      this.selector = this.getSelectedTab()
   }

   @action.bound
   renderChildComponent() {
      const {
         adminStore: {
            resourcesListPaginationStore,
            requestsListPaginationStore
         }
      } = this.getInjectedProps()
      const { onClickResourceCard } = this
      switch (this.selector) {
         case 'resources': {
            return (
               <ResourcesList
                  resourcesListInstance={resourcesListPaginationStore}
                  onClickResourceCard={onClickResourceCard}
               />
            )
         }
         case 'requests': {
            this.doNetWorkCallsForRequestsList()
            return (
               <RequestsList
                  requestsListInstance={requestsListPaginationStore}
                  onClickAcceptButton={this.onClickAcceptButton}
                  onClickRejectButton={this.onClickRejectButton}
               />
            )
         }
         case 'users': {
            return <UsersList />
         }
      }
   }

   onClickResourceCard = resourceId => {
      const { history } = this.getInjectedProps()
      // history.push({
      //    pathname: `${ADMIN_RESOURCE_DETAILS}`,
      //    search: `?resourceId=${resourceId}`
      // })
      goToResourceDetails(history, resourceId)
   }
   onClickAddResource = () => {
      const { history } = this.getInjectedProps()
      goToAddResourcePage(history)
   }
   onClickAcceptButton = acceptedRequests => {
      console.log(acceptedRequests)
   }
   onClickRejectButton = (rejectedRequests, reason) => {
      console.log(reason)
      console.log(rejectedRequests)
   }
   render() {
      const { onClickAddResource } = this
      return (
         <Dashboard
            onClickResources={this.onClickResources}
            onClickRequests={this.onClickRequests}
            onClickUsers={this.onClickUsers}
            onClickAddResource={onClickAddResource}
            renderChildComponent={this.renderChildComponent}
            selector={this.selector}
         />
      )
   }
}

export default withRouter(DashboardRoute)
