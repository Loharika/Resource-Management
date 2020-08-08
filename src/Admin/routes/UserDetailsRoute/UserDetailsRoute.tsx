import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import UserDetails from '../../components/UserDetails'
import withHeader from '../../../Common/Hocs'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdminStore from '../../stores/AdminStore'

interface UserDetailsRouteProps extends RouteComponentProps {}
interface InjectedProps extends UserDetailsRouteProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class UserDetailsRoute extends Component<UserDetailsRouteProps> {
   getInjectedProps = () => this.props as InjectedProps
   getUserId = () => {
      const {
         match: { params }
      } = this.getInjectedProps()
      const {
         history: { location }
      } = this.getInjectedProps()
      // console.log(params)
      // console.log(location.search)
      return params['userId']
   }
   doNetWorkCalls = () => {
      const {
         adminStore: { getUserDetails }
      } = this.getInjectedProps()
      const requestObject = {
         user_id: this.getUserId()
      }
      console.log(this.getUserId())
      getUserDetails(requestObject)
   }
   componentDidMount() {
      this.doNetWorkCalls()
   }
   onClickResourcesButton = () => {
      const { history } = this.getInjectedProps()
      history.goBack()
   }
   render() {
      const {
         adminStore: {
            userDetailsResponse,
            getUserDetailsAPIError,
            getUserDetailsAPIStatus
         }
      } = this.getInjectedProps()
      return (
         <UserDetails
            onClickResourcesButton={this.onClickResourcesButton}
            userDetails={userDetailsResponse}
            getUserDetailsAPIError={getUserDetailsAPIError}
            getUserDetailsAPIStatus={getUserDetailsAPIStatus}
            doNetWorkCalls={this.doNetWorkCalls}
         />
      )
   }
}

export default withRouter(withHeader(UserDetailsRoute))
