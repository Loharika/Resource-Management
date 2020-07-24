import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AdminStore from '../../stores/AdminStore'
import UpdateResource from '../../components/UpdateResource'

interface UpdateResourceRouteProps extends RouteComponentProps {}

interface InjectedProps extends UpdateResourceRouteProps {
   adminStore: AdminStore
   history: any
}
@inject('adminStore')
@observer
class UpdateResourceItemRoute extends Component<UpdateResourceRouteProps> {
   constructor(props) {
      super(props)
   }
   componentDidMount() {
      console.log('route')
      this.doNetWorkCallForResourceDetails()
   }
   getInjectedProps = () => this.props as InjectedProps
   doNetWorkCallForResourceDetails = () => {
      const {
         adminStore: { getResourceDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      getResourceDetails(requestObject)
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
      console.log(resourcesDetailsResponse)
      return (
         <UpdateResource
            doNetWorkCalls={this.doNetWorkCallForResourceDetails}
            getResourceDetailsAPIError={getResourceDetailsAPIError}
            getResourceDetailsAPIStatus={getResourceDetailsAPIStatus}
            resourceId={this.getResourceId()}
            resourcesDetailsResponse={resourcesDetailsResponse}
         />
      )
   }
}

export default withRouter(UpdateResourceItemRoute)
