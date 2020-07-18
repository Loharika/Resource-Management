import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { withRouter, RouteComponentProps } from 'react-router-dom'
import AuthStore from '../../../Authentication/stores/AuthStore'
interface InjectedProps extends RouteComponentProps {}
interface Page1Props extends InjectedProps {
   authStore: AuthStore
}

class Page1 extends Component<Page1Props> {
   render() {
      return <div>Page1</div>
   }
}

export default withRouter(Page1)
