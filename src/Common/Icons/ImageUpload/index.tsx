import React, { Component } from 'react'

import SvgFile from './SvgFile'
import SvgComponent from '../../components/common/SvgComponent'

class ImageUpload extends Component {
   render() {
      return <SvgComponent renderComponent={SvgFile} {...this.props} />
   }
}

export default ImageUpload
