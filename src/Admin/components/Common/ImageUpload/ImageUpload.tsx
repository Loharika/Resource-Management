import React, { Component } from 'react'
import ImageUploadIcon from '../../../../Common/Icons/ImageUpload'
import { observer } from 'mobx-react'
import { ImageUploadStyle } from './styledComponents'

@observer
class ImageUpload extends Component {
   render() {
      return (
         <ImageUploadStyle>
            <ImageUploadIcon />
            <button type={'button'}>Change photo</button>
         </ImageUploadStyle>
      )
   }
}

export default ImageUpload
