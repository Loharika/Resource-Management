import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Template from '../Common/Template'
import withHeader from '../../../Common/Hocs'
import {
   goToAdminDashboardResources,
   goToResourceDetails
} from '../../utils/NavigationalUtils'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import {
   AddResourceStyle,
   Heading,
   ButtonCss
} from '../AddResourceItem/styledComponents'
import ImageUpload from '../Common/ImageUpload'
import { Button } from '../../../Common/components/Button'
import AdminStore from '../../stores/AdminStore'

interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
}
interface UpdateResourceProps extends InjectedProps {}

@inject('adminStore')
@observer
class UpdateResourceItem extends Component<UpdateResourceProps> {
   @observable itemName: string
   @observable itemId: string
   @observable link: string
   @observable description: string
   @observable resourceType: string
   constructor(props) {
      super(props)
      this.itemName = ''
      this.itemId = ''
      this.link = ''
      this.description = ''
      this.resourceType = ''
   }
   componentDidMount() {
      const {
         match: { params },
         history
      } = this.getInjectedProps()
      let resourceId = params['resourceId']
      const {
         adminStore: { resourcesListPaginationStore }
      } = this.getInjectedProps()
      console.log(resourcesListPaginationStore.results)
      //   let resourceDetails = resourcesListPaginationStore.results.filter(
      //      resource => resource.resourceId === resourceId
      //   )
      //   console.log(resourceDetails)
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
   onClickUpdateButton = () => {
      const {
         match: { params },
         history
      } = this.getInjectedProps()
      let resourceId = params['resourceId']
      goToResourceDetails(history, resourceId)
   }
   renderSuccessUI = () => {
      return (
         <AddResourceStyle>
            <Heading>Item Details</Heading>
            <InputField
               value={this.itemName}
               onChangeField={this.onChangeItemName}
               label={'NAME'}
               placeholderText={'Name'}
            />
            <InputField
               value={this.link}
               onChangeField={this.onChangeLink}
               label={'LINK'}
               placeholderText={'Link'}
            />
            <InputField
               value={this.itemId}
               onChangeField={this.onChangeItemId}
               label={"ITEM I'D"}
               placeholderText={'Name'}
            />
            <InputField
               label={'RESOURCE NAME'}
               value={this.description}
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
               text={'Update'}
               onClick={this.onClickUpdateButton}
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

export default withRouter(withHeader(UpdateResourceItem))
