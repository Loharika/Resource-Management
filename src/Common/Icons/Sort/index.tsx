import React, { Component } from 'react'

import SvgFile from './SvgFile'
import SvgComponent from '../../components/common/SvgComponent'

class SortIcon extends Component {
   render() {
      return <SvgComponent renderComponent={SvgFile} {...this.props} />
   }
}

export default SortIcon
