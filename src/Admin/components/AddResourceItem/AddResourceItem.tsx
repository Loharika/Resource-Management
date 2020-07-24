import React, { Component } from 'react'
import Template from '../Common/Template'
import withHeader from '../../../Common/Hocs'
import { goToAdminDashboardResources } from '../../utils/NavigationalUtils'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import { AddResourceStyle, Heading, ButtonCss } from './styledComponents'

import { Button } from '../../../Common/components/Button'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import AdminStore from '../../stores/AdminStore'

interface InjectedProps extends RouteComponentProps {}
interface AddResourceItemProps extends InjectedProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class AddResourceItem extends Component<AddResourceItemProps> {
   @observable itemName: string
   @observable link: string
   @observable resourceType: string
   @observable description: string
   @observable displayError: boolean
   constructor(props) {
      super(props)
      this.itemName = ''
      this.link = ''
      this.resourceType = ''
      this.description = ''
      this.displayError = false
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
   @action.bound
   isValidateAddResourceDetails(): boolean {
      let details = [this.itemName, this.link, this.description]
      let notFilledFields = details.filter(
         eachDetail => eachDetail.length === 0
      )
      return notFilledFields.length === 0
   }
   onClickAddCreate = () => {
      this.displayError = true
      if (this.isValidateAddResourceDetails()) {
         this.displayError = false
         let requestObject = {
            name: this.itemName,
            link: this.link,
            description: this.description
         }
         this.addResourceItemDetails(requestObject)
      } else {
         this.displayError = true
      }
   }

   async addResourceItemDetails(requestObject) {
      const {
         adminStore: { addResource }
      } = this.props
      await addResource(requestObject)
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
               displayError={this.displayError}
            />
            <InputField
               value={this.link}
               onChangeField={this.onChangeLink}
               label={'LINK'}
               placeholderText={'Link'}
               displayError={this.displayError}
            />
            <InputField
               label={'RESOURCE NAME'}
               value={this.resourceType}
               placeholderText={'Resource NAME'}
               onChangeField={this.onChangeResourceType}
               displayError={this.displayError}
            />
            <TextAreaField
               label={'DESCRIPTION'}
               value={this.description}
               placeholderText={'DESCRIPTION'}
               onChangeField={this.onChangeDescription}
               displayError={this.displayError}
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

export default withRouter(withHeader(AddResourceItem))
