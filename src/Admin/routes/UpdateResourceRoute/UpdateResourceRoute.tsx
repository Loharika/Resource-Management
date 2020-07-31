import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminStore from '../../stores/AdminStore'
import UpdateResource from '../../components/UpdateResource'
import { observable, action } from 'mobx'
import { goToResourceDetails } from '../../utils/NavigationalUtils'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'

interface UpdateResourceRouteProps extends RouteComponentProps {}

interface InjectedProps extends UpdateResourceRouteProps {
   adminStore: AdminStore
   history: any
}
@inject('adminStore')
@observer
class UpdateResourceRoute extends Component<UpdateResourceRouteProps> {
   getInjectedProps = () => this.props as InjectedProps
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

   doNetWorkCallForResourceDetails = async () => {
      const {
         adminStore: { getResourceDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      await getResourceDetails(requestObject)
   }

   getResourceId = () => {
      const {
         match: { params }
      } = this.getInjectedProps()
      let resourceId = params['resourceId']
      return resourceId
   }
   @action.bound
   async updateResourceDetails(requestObject) {
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

         goToResourceDetails(history, this.getResourceId())
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
            updateResourceDetails={this.updateResourceDetails}
         />
      )
   }
}

export default withRouter(UpdateResourceRoute)
