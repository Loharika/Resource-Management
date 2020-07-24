import React, { Component } from 'react'
import Template from '../Common/Template'
import withHeader from '../../../Common/Hocs'
import { goToAdminDashboardResources } from '../../utils/NavigationalUtils'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { AddResourceStyle, Heading, ButtonCss } from './styledComponents'

import { Button } from '../../../Common/components/Button'
@observer
class AddResourceItem extends Component {
   @observable itemName: string
   @observable link: string
   @observable resourceType: string
   @observable description: string

   constructor(props) {
      super(props)
      this.itemName = ''
      this.link = ''
      this.resourceType = ''
      this.description = ''
   }
   onChangeItemName = itemName => {
      this.itemName = itemName
   }
   onChangeLink = link => {
      this.link = link
   }
   onChangeResourceType = resourceType => {
      this.resourceType = resourceType
   }
   onChangeDescription = description => {
      this.description = description
   }
   onClickAddCreate = () => {
      alert('create')
   }
   renderSuccessUI = () => {
      return (
         <AddResourceStyle>
            <Heading>Item Details</Heading>
            <InputField
               value={this.itemName}
               onChangeField={this.onChangeItemName}
               label={'ITEM NAME'}
               placeholderText={'Resource Item Name'}
            />
            <InputField
               value={this.link}
               onChangeField={this.onChangeLink}
               label={'LINK'}
               placeholderText={'Link'}
            />
            <InputField
               label={'RESOURCE NAME'}
               value={this.resourceType}
               placeholderText={'Resource NAME'}
               onChangeField={this.onChangeResourceType}
            />
            <TextAreaField
               label={'DESCRIPTION'}
               value={this.description}
               placeholderText={'DESCRIPTION'}
               onChangeField={this.onChangeDescription}
            />
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

export default withHeader(AddResourceItem)
