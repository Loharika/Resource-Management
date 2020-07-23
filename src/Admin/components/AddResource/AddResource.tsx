import React, { Component } from 'react'
import Template from '../Common/Template'
import withHeader from '../../../Common/Hocs'
import { goToAdminDashboardResources } from '../../utils/NavigationalUtils'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { AddResourceStyle, Heading, ButtonCss } from './styledComponents'
import ImageUpload from '../Common/ImageUpload'
import { Button } from '../../../Common/components/Button'
@observer
class AddResource extends Component {
   @observable name: string
   @observable link: string
   @observable description: string
   @observable imageLink: string
   constructor(props) {
      super(props)
      this.name = ''
      this.link = ''
      this.description = ''
      this.imageLink = ''
   }
   onChangeName = name => {
      this.name = name
   }
   onChangeLink = link => {
      this.link = link
   }
   onChangeDescription = description => {
      this.description = description
   }
   onUploadImage = imageLink => {
      this.imageLink = imageLink
   }
   onClickAddCreate = () => {
      alert('create')
   }
   renderSuccessUI = () => {
      return (
         <AddResourceStyle>
            <Heading>Add Resource</Heading>
            <InputField
               value={this.name}
               onChangeField={this.onChangeName}
               label={'NAME'}
               placeholderText={'Name'}
            />
            <InputField
               value={this.link}
               onChangeField={this.onChangeLink}
               label={'LINK'}
               placeholderText={'Link'}
            />
            <TextAreaField
               label={'DESCRIPTION'}
               value={this.description}
               placeholderText={'DESCRIPTION'}
               onChangeField={this.onChangeDescription}
            />
            <ImageUpload onUploadImage={this.onUploadImage} />

            <Button
               text={'Create'}
               onClick={this.onClickAddCreate}
               buttonType={'rectangular'}
               buttonVariant={'filled'}
               css={ButtonCss}
            />
         </AddResourceStyle>
      )
   }
   render() {
      return (
         <Template
            buttonText={'Resources'}
            onClickButton={goToAdminDashboardResources}
            renderChildComponent={this.renderSuccessUI}
         />
      )
   }
}

export default withHeader(AddResource)
