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
class UpdateResource extends Component<UpdateResourceProps> {
   @observable name: string
   @observable link: string
   @observable description: string
   @observable imageLink: string
   @observable service: string
   constructor(props) {
      super(props)
      this.name = ''
      this.link = ''
      this.description = ''
      this.imageLink = ''
      this.service = ''
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
   onChangeName = name => {
      this.name = name
   }
   onChangeLink = link => {
      this.link = link
   }
   onChangeService = service => {
      this.service = service
   }
   onChangeDescription = description => {
      this.description = description
   }
   onUploadImage = imageLink => {
      this.imageLink = imageLink
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
            <Heading>Update Resource</Heading>
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
            <InputField
               value={this.service}
               onChangeField={this.onChangeService}
               label={'SERVICE'}
               placeholderText={'Service'}
            />
            <TextAreaField
               label={'DESCRIPTION'}
               value={this.description}
               placeholderText={'DESCRIPTION'}
               onChangeField={this.onChangeDescription}
            />
            <ImageUpload onUploadImage={this.onUploadImage} />
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

export default withRouter(withHeader(UpdateResource))
