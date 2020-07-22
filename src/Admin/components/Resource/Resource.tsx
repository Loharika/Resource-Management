import React, { Component } from 'react'
import { observer } from 'mobx-react'

import { ResourceStyle, ResourceDetails } from './styledComponents'
import InputField from '../Common/InputField'
@observer
class Resource extends Component {
   render() {
      return (
         <ResourceStyle>
            <ResourceDetails>{/* <InputField /> */}</ResourceDetails>
         </ResourceStyle>
      )
   }
}

export default Resource
