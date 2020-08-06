import React, { Component } from 'react'
import { observer } from 'mobx-react'
import UserDetails from '../../components/UserDetails'
import withHeader from '../../../Common/Hocs'

@observer
class UserDetailsRoute extends Component {
   render() {
      return <UserDetails />
   }
}

export default withHeader(UserDetailsRoute)
