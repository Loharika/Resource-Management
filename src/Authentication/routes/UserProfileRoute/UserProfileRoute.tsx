import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import UserProfile from '../../components/UserProfile'
import AuthStore from '../../stores/AuthStore'

interface UserProfileRouteProps extends RouteComponentProps {}
interface InjectedProps extends UserProfileRouteProps {
   authStore: AuthStore
}

@inject('authStore')
@observer
class UserProfileRoute extends Component<UserProfileRouteProps> {
   getInjectedProps = () => this.props as InjectedProps
   doNetworkCalls = async () => {
      const {
         authStore: { getUserSignInAPIResponse, getUserProfileDetails }
      } = this.getInjectedProps()
      const requestObject = { user_id: getUserSignInAPIResponse.user_id }
      await getUserProfileDetails(requestObject)
   }
   componentDidMount() {
      this.doNetworkCalls()
   }
   render() {
      return <UserProfile />
   }
}

export default withRouter(UserProfileRoute)
