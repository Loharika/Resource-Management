import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import AdminStore from '../../stores/AdminStore'

interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
}
interface ResourceDetails extends InjectedProps {}
@inject('adminStore')
@observer
class ResourceDetails extends Component<ResourceDetails> {
   getInjectedProps = () => this.props as InjectedProps
   componentDidMount() {
      const {
         match: { params }
      } = this.getInjectedProps()
      console.log(params['resourceId'])
   }
   render() {
      const {
         adminStore: { resourcesListPaginationStore }
      } = this.getInjectedProps()

      return <div>ResourceDetails</div>
   }
}

export default withRouter(ResourceDetails)
