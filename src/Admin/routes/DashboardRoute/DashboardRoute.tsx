import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import Dashboard from '../../components/Dashboard'
import ResourcesList from '../../components/ResourcesList'
import RequestsList from '../../components/RequestsList'
import UsersList from '../../components/UsersList'
import { RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../stores/AdminStore'
import AuthStore from '../../../Authentication/stores/AuthStore'

interface InjectedProps extends RouteComponentProps {}
interface DashboardRouteProps extends InjectedProps {
   authStore: AuthStore
   adminStore: AdminStore
}
@inject('authStore', 'adminStore')
@observer
class DashboardRoute extends Component<DashboardRouteProps> {
   @observable selector: string
   constructor(props) {
      super(props)
      this.selector = 'Resources'
   }
   componentDidMount() {
      this.doNetWorkCallsForResourceList()
   }
   getInjectedProps = () => this.props as InjectedProps
   doNetWorkCallsForResourceList() {
      const {
         adminStore: { getResourceList }
      } = this.props
      getResourceList()
   }
   @action.bound
   onClickSelector(selectedTab: string): void {
      this.selector = selectedTab
      switch (this.selector) {
         case 'Resources': {
            this.doNetWorkCallsForResourceList()

            return
         }
         case 'Requests': {
            return
         }
         case 'Users': {
            return
         }
      }
   }
   @action.bound
   renderChildComponent() {
      switch (this.selector) {
         case 'Resources': {
            return <ResourcesList />
         }
         case 'Requests': {
            return <RequestsList />
         }
         case 'Users': {
            return <UsersList />
         }
      }
   }
   render() {
      const {
         adminStore: { resourcesListResponse }
      } = this.props
      console.log(resourcesListResponse)
      return (
         <Dashboard
            onClickSelector={this.onClickSelector}
            childComponent={this.renderChildComponent()}
            selector={this.selector}
         />
      )
   }
}

export default DashboardRoute
