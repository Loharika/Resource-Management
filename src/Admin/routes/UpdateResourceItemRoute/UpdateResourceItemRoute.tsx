import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminStore from '../../stores/AdminStore'
import UpdateResourceItem from '../../components/UpdateResourceItem'
import { action } from 'mobx'
import { goToResourceDetails } from '../../utils/NavigationalUtils'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

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
   doNetWorkCallForResourceItemDetails = () => {
      const {
         adminStore: { getResourceItemDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceItemId()
      }
      getResourceItemDetails(requestObject)
   }

   getResourceItemId = () => {
      const {
         match: { params }
      } = this.getInjectedProps()
      let resourceId = params['resourceItemId']
      return resourceId
   }
   @action.bound
   async updateResourceItemDetails(requestObject) {
      const {
         adminStore: { updateResource }
      } = this.getInjectedProps()
      await updateResource(requestObject)
      const {
         adminStore: {
            getUpdateResourceAPIStatus,
            getUpdateResourceAPIError: error
         }
      } = this.getInjectedProps()
      if (getUpdateResourceAPIStatus === 200) {
         this.displayToaster('Added Successfully')
         const { history } = this.props
         const resourceId = window.localStorage.getItem('resourceId')
         console.log(resourceId)
         goToResourceDetails(history, resourceId)
      } else {
         this.displayToaster(getUserDisplayableErrorMessage(error))
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
   render() {
      const {
         adminStore: {
            getResourceItemDetailsAPIError,
            getResourceItemDetailsAPIStatus,
            resourcesItemDetailsResponse
         }
      } = this.getInjectedProps()

      return (
         <UpdateResourceItem
            doNetWorkCalls={this.doNetWorkCallForResourceItemDetails}
            getResourceItemDetailsAPIError={getResourceItemDetailsAPIError}
            getResourceItemDetailsAPIStatus={getResourceItemDetailsAPIStatus}
            resourceItemId={this.getResourceItemId()}
            resourcesItemDetailsResponse={resourcesItemDetailsResponse}
            updateResourceItemDetails={this.updateResourceItemDetails}
         />
      )
   }
}

export default withRouter(UpdateResourceItemRoute)
