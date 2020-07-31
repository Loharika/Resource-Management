import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AdminStore from '../../stores/AdminStore'
import UpdateResourceItem from '../../components/UpdateResourceItem'

interface UpdateResourceRouteProps extends RouteComponentProps {}

interface InjectedProps extends UpdateResourceRouteProps {
   adminStore: AdminStore
   history: any
}
@inject('adminStore')
@observer
class UpdateResourceItemRoute extends Component<UpdateResourceRouteProps> {
   componentDidMount() {
      this.doNetWorkCallForResourceItemDetails()
      if (
         window.localStorage.getItem('isOpenedUpdateResourceItemPage') !== 'yes'
      ) {
         const {
            match: { params },
            history
         } = this.getInjectedProps()
         // goToResourceDetails(history, params['resourceId'])
         history.goBack()
      } else {
         window.localStorage.clear()
      }
   }
   getInjectedProps = () => this.props as InjectedProps
   doNetWorkCallForResourceItemDetails = async () => {
      const {
         adminStore: { getResourceItemDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceItemId()
      }
      await getResourceItemDetails(requestObject)
   }

   getResourceItemId = () => {
      const {
         match: { params }
      } = this.getInjectedProps()
      let resourceId = params['resourceId']
      return resourceId
   }
   render() {
      const {
         adminStore: {
            getResourceItemDetailsAPIError,
            getResourceItemDetailsAPIStatus,
            resourcesItemDetailsResponse
         }
      } = this.getInjectedProps()
      console.log(resourcesItemDetailsResponse)
      return (
         <UpdateResourceItem
            doNetWorkCalls={this.doNetWorkCallForResourceItemDetails}
            getResourceItemDetailsAPIError={getResourceItemDetailsAPIError}
            getResourceItemDetailsAPIStatus={getResourceItemDetailsAPIStatus}
            resourceItemId={this.getResourceItemId()}
            resourcesItemDetailsResponse={resourcesItemDetailsResponse}
         />
      )
   }
}

export default withRouter(UpdateResourceItemRoute)
