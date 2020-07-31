import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import withHeader from '../../../Common/Hocs'
import { Button } from '../../../Common/components/Button'
import AdminStore from '../../stores/AdminStore'

import {
   goToAdminDashboardResources,
   goToResourceDetails
} from '../../utils/NavigationalUtils'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import Template from '../Common/Template'

import {
   AddResourceStyle as UpdateResourceStyle,
   Heading,
   ButtonCss
} from '../AddResourceItem/styledComponents'

interface UpdateResourceProps extends RouteComponentProps {
   doNetWorkCalls: () => void
   getResourceItemDetailsAPIError: any
   getResourceItemDetailsAPIStatus: any
   resourceItemId: number
   resourcesItemDetailsResponse: any
}
interface InjectedProps extends UpdateResourceProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class UpdateResourceItem extends Component<UpdateResourceProps> {
   @observable itemName: string
   @observable itemId: string
   @observable link: string
   @observable description: string
   @observable resourceType: string
   @observable displayError: boolean
   constructor(props) {
      super(props)
      this.itemName = ''
      this.itemId = ''
      this.link = ''
      this.description = ''
      this.resourceType = ''
      this.displayError = false
   }
   componentDidMount() {
      const {
         match: { params },
         history
      } = this.getInjectedProps()
   }
   getInjectedProps = () => this.props as InjectedProps
   onChangeItemName = itemName => {
      this.itemName = itemName
   }
   onChangeItemId = itemId => {
      this.itemId = itemId
   }
   onChangeLink = link => {
      this.link = link
   }
   onChangeDescription = description => {
      this.description = description
   }
   onChangeResourceType = resourceType => {
      this.resourceType = resourceType
   }
   @action.bound
   isValidateAddResourceDetails(): boolean {
      let details = [this.itemName, this.link, this.description]
      let notFilledFields = details.filter(
         eachDetail => eachDetail.length === 0
      )
      return notFilledFields.length === 0
   }
   onClickUpdateButton = () => {
      if (this.isValidateAddResourceDetails()) {
         this.displayError = false
         let requestObject = {
            name: this.itemName,
            link: this.link,
            description: this.description
         }
         this.updateResourceItemDetails(requestObject)
      } else {
         this.displayError = true
      }
   }
   async updateResourceItemDetails(requestObject) {
      const {
         adminStore: { updateResourceItem }
      } = this.getInjectedProps()
      await updateResourceItem(requestObject)
      const {
         adminStore: {
            getUpdateResourceItemAPIStatus,
            getUpdateResourceItemAPIError: error
         }
      } = this.getInjectedProps()
      console.log(getUpdateResourceItemAPIStatus)
      if (getUpdateResourceItemAPIStatus) {
         this.displayToaster('Added Successfully')
         // const { resourceId, history } = this.getInjectedProps()
         const { history } = this.getInjectedProps()
         const resourceId = 1234543
         goToResourceDetails(history, resourceId)
      } else {
         this.displayToaster(getUserDisplayableErrorMessage(error))
      }
   }
   displayToaster(status) {
      toast(<div className='text-black font-bold'>{status}</div>, {
         position: 'top-center',
         autoClose: 3000,
         closeButton: false,
         hideProgressBar: true
      })
   }
   renderSuccessUI = () => {
      return (
         <UpdateResourceStyle>
            <Heading>Item Details</Heading>
            <InputField
               value={this.itemName}
               onChangeField={this.onChangeItemName}
               label={'NAME'}
               placeholderText={'Name'}
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
               value={this.itemId}
               onChangeField={this.onChangeItemId}
               label={"ITEM I'D"}
               placeholderText={'Name'}
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
               text={'Update'}
               onClick={this.onClickUpdateButton}
               buttonType={'rectangular'}
               buttonVariant={'filled'}
               css={ButtonCss}
            />
         </UpdateResourceStyle>
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

export default withRouter(withHeader(UpdateResourceItem))
