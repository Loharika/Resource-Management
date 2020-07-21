import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import Dashboard from '../../components/Dashboard'
import ResourcesList from '../../components/ResourcesList'
import RequestsList from '../../components/RequestsList'
import UsersList from '../../components/UsersList'

@inject('authStore')
@observer
class DashboardRoute extends Component {
   @observable selector: string
   constructor(props) {
      super(props)
      this.selector = 'Resources'
   }
   @action.bound
   onClickSelector(selectedTab: string): void {
      this.selector = selectedTab
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
