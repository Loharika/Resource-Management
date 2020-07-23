import React, { Component } from 'react'
import ImageUploadIcon from '../../../../Common/Icons/ImageUpload'
import { observer } from 'mobx-react'
import { ImageUploadStyle } from './styledComponents'
import { observable } from 'mobx'

interface ImageUploadProps {
   onUploadImage: (imageLink) => any
}
@observer
class ImageUpload extends Component<ImageUploadProps> {
   @observable image: any
   constructor(props) {
      super(props)
      this.image = ''
   }

   onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0]
         let reader = new FileReader()
         reader.readAsDataURL(img)
         reader.onload = () => {
            this.image = reader.result
         }
      }
      const { onUploadImage } = this.props
      onUploadImage(this.image)
   }

   render() {
      return (
         <div>
            <img src={this.image} />
            <ImageUploadStyle>
               <ImageUploadIcon />

               <input
                  type='file'
                  name='myImage'
                  onChange={this.onImageChange}
               />
               <button type={'button'} onClick={() => console.log(this.image)}>
                  upload
               </button>
            </ImageUploadStyle>
         </div>
      )
   }
}
export default ImageUpload
