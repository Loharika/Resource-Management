import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AdminStore from '../../stores/AdminStore'
import UpdateResource from '../../components/UpdateResource'
import { observable } from 'mobx'
import { goToResourceDetails } from '../../utils/NavigationalUtils'

interface UpdateResourceRouteProps extends RouteComponentProps {}

interface InjectedProps extends UpdateResourceRouteProps {
   adminStore: AdminStore
   history: any
}
@inject('adminStore')
@observer
class UpdateResourceRoute extends Component<UpdateResourceRouteProps> {
   componentDidMount() {
      this.doNetWorkCallForResourceDetails()
      if (window.localStorage.getItem('isOpenedUpdateResourcePage') !== 'yes') {
         const {
            match: { params },
            history
         } = this.getInjectedProps()
         goToResourceDetails(history, params['resourceId'])
      } else {
         window.localStorage.clear()
      }
   }
   getInjectedProps = () => this.props as InjectedProps
   doNetWorkCallForResourceDetails = async () => {
      const {
         adminStore: { getResourceDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      await getResourceDetails(requestObject)
      this.getInjectedProps().adminStore.resourcesDetailsResponse
   }
   getResourceId = () => {
      const {
         match: { params }
      } = this.getInjectedProps()
      let resourceId = params['resourceId']
      return resourceId
   }
   render() {
      const {
         adminStore: {
            getResourceDetailsAPIError,
            getResourceDetailsAPIStatus,
            resourcesDetailsResponse
         }
      } = this.getInjectedProps()

      return (
         <UpdateResource
            resourcesDetailsResponse={resourcesDetailsResponse}
            doNetWorkCalls={this.doNetWorkCallForResourceDetails}
            getResourceDetailsAPIError={getResourceDetailsAPIError}
            getResourceDetailsAPIStatus={getResourceDetailsAPIStatus}
            resourceId={this.getResourceId()}
         />
      )
   }
}

export default withRouter(UpdateResourceRoute)
