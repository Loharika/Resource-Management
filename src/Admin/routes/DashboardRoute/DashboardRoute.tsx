import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Dashboard from '../../components/Dashboard'
import ResourcesList from '../../components/ResourcesList'
import RequestsList from '../../components/RequestsList'
import UsersList from '../../components/UsersList'

import AdminStore from '../../stores/AdminStore'

import {
   goToAdminDashboardResources,
   goToAdminDashboardRequests,
   goToAdminDashboardUsers
} from '../../utils/NavigationalUtils'
import { ADMIN_DASHBOARD_RESOURCES } from '../../../Authentication/constants/NavigationalConstants'

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
         adminStore: { resourcesListPaginationStore }
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
            return <RequestsList />
         }
         case 'users': {
            return <UsersList />
         }
      }
   }
   onClickResourceCard = resourceId => {
      const { history } = this.getInjectedProps()
      history.push(`${ADMIN_DASHBOARD_RESOURCES}/${resourceId}`)
   }
   render() {
      const {
         adminStore: {}
      } = this.getInjectedProps()
      return (
         <Dashboard
            onClickResources={this.onClickResources}
            onClickRequests={this.onClickRequests}
            onClickUsers={this.onClickUsers}
            childComponent={this.renderChildComponent()}
            selector={this.selector}
         />
      )
   }
}

export default withRouter(DashboardRoute)
