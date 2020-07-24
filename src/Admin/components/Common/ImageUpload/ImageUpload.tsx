import React, { Component } from 'react'
import ImageUploadIcon from '../../../../Common/Icons/ImageUpload'
import { observer } from 'mobx-react'
import {
   ImageUploadStyle,
   InputImageFile,
   UploadButton,
   InputImageWithIcon,
   DefaultImage,
   ErrorMessage
} from './styledComponents'
import { observable, action } from 'mobx'
import defaultImage from '../../../../Common/Images/2bf7775d-7a9e-40de-896f-edc48ce9832d@3x.png'

interface ImageUploadProps {
   image?: string
   onUploadImage: (imageLink) => any
   displayError?: boolean
}
@observer
class ImageUpload extends Component<ImageUploadProps> {
   @observable image: any
   constructor(props) {
      super(props)
      this.image = defaultImage
   }

   onImageChange = event => {
      if (event.target.files) {
         let img = event.target.files[0]
         let reader = new FileReader()
         reader.readAsDataURL(img)
         reader.onload = () => {
            this.image = reader.result
         }
      }
   }
   @action.bound
   uploadImage() {
      const { onUploadImage } = this.props
      onUploadImage(this.image)
   }
   renderErrorMessage = () => {
      const { displayError, image } = this.props
      if (displayError && image !== undefined && image.length === 0) {
         return <ErrorMessage>upload the Image</ErrorMessage>
      } else {
         return <ErrorMessage> &nbsp;</ErrorMessage>
      }
   }
   render() {
      return (
         <ImageUploadStyle>
            <ImageUploadStyle>
               <InputImageWithIcon>
                  <DefaultImage src={defaultImage} />
                  <ImageUploadIcon />
                  <InputImageFile
                     type='file'
                     name='myImage'
                     onChange={this.onImageChange}
                     accept='image/png, image/jpeg'
                  />
               </InputImageWithIcon>
               <UploadButton type={'button'} onClick={this.uploadImage}>
                  upload
               </UploadButton>
            </ImageUploadStyle>
            {this.renderErrorMessage()}
         </ImageUploadStyle>
      )
   }
}
export default ImageUpload
