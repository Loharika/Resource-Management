import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { Button } from '../../../Common/components/Button'
import withHeader from '../../../Common/Hocs'
import {
   goToAdminDashboardResources,
   goToResourceDetails
} from '../../utils/NavigationalUtils'
import AdminStore from '../../stores/AdminStore'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import Template from '../Common/Template'
import ImageUpload from '../Common/ImageUpload'
import {
   AddResourceStyle,
   Heading,
   ButtonCss
} from '../AddResourceItem/styledComponents'
import ResourceDetails from '../ResourceDetails'

interface UpdateResourceProps extends RouteComponentProps {
   doNetWorkCalls: () => void
   getResourceDetailsAPIError: any
   getResourceDetailsAPIStatus: any
   resourceId: number
   resourcesDetailsResponse: any
}

interface InjectedProps extends UpdateResourceProps {
   adminStore: AdminStore
}
@inject('adminStore')
@observer
class UpdateResource extends Component<UpdateResourceProps> {
   @observable name!: string
   @observable link!: string
   @observable description!: string
   @observable imageLink!: string
   @observable service!: string
   @observable displayError!: boolean

   constructor(props) {
      super(props)
      this.updateDetails()
   }

   updateDetails = () => {
      const { resourcesDetailsResponse: details } = this.props
      this.name = details.name
      this.link = details.link
      this.description = details.description
      this.imageLink = details.resource_image
      this.service = details.service
      this.displayError = false
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
   @action.bound
   isValidateAddResourceDetails(): boolean {
      let details = [
         this.name,
         this.link,
         this.description,
         this.service,
         this.imageLink
      ]
      let notFilledFields = details.filter(
         eachDetail => eachDetail.length === 0
      )
      return notFilledFields.length === 0
   }
   onClickUpdateButton = () => {
      this.displayError = true
      if (this.isValidateAddResourceDetails()) {
         this.displayError = false
         let requestObject = {
            name: this.name,
            link: this.link,
            description: this.description,
            service: this.service,
            resource_image: this.imageLink
         }
         this.updateResourceDetails(requestObject)
      } else {
         this.displayError = true
      }
   }
   async updateResourceDetails(requestObject) {
      const {
         adminStore: { updateResource }
      } = this.getInjectedProps()
      await updateResource(requestObject)
      const {
         adminStore: {
            getUpdateResourceAPIStatus,
            getUpdateResourceAPIError: error
         }
      } = this.getInjectedProps()
      if (getUpdateResourceAPIStatus === 200) {
         this.displayToaster('Added Successfully')
         const { resourceId, history } = this.props

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
   renderResources = () => {
      return (
         <AddResourceStyle>
            <Heading>Update Resource</Heading>
            <InputField
               value={this.name}
               onChangeField={this.onChangeName}
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
               value={this.service}
               onChangeField={this.onChangeService}
               label={'SERVICE'}
               placeholderText={'Service'}
               displayError={this.displayError}
            />
            <TextAreaField
               label={'DESCRIPTION'}
               value={this.description}
               placeholderText={'DESCRIPTION'}
               onChangeField={this.onChangeDescription}
               displayError={this.displayError}
            />
            <ImageUpload
               onUploadImage={this.onUploadImage}
               displayError={this.displayError}
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
   renderSuccessUI = () => {
      return (
         <Template
            buttonText={'Resources'}
            onClickButton={goToAdminDashboardResources}
            renderChildComponent={this.renderResources}
         />
      )
   }
   render() {
      const {
         doNetWorkCalls,
         getResourceDetailsAPIError,
         getResourceDetailsAPIStatus,
         resourcesDetailsResponse
      } = this.props

      return (
         <LoadingWrapperWithFailure
            apiStatus={getResourceDetailsAPIStatus}
            apiError={getResourceDetailsAPIError}
            renderSuccessUI={this.renderSuccessUI}
            onRetryClick={doNetWorkCalls}
         />
      )
   }
}
export default withRouter(withHeader(UpdateResource))
