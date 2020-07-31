import React, { Component } from 'react'
import RequestsList from '../../components/RequestsList'
import { observer } from 'mobx-react'

interface RequestsListRouteProps {
   requestsListInstance: any
}
@observer
class RequestsListRoute extends Component<RequestsListRouteProps> {
   render() {
      const { requestsListInstance } = this.props

      return <RequestsList requestsListInstance={requestsListInstance} />
   }
}

export default RequestsListRoute
