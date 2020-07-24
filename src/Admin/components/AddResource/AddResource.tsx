import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Template from '../Common/Template'
import withHeader from '../../../Common/Hocs'
import { goToAdminDashboardResources } from '../../utils/NavigationalUtils'
import InputField from '../Common/InputField'
import TextAreaField from '../Common/TextAreaField'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import { AddResourceStyle, Heading, ButtonCss } from './styledComponents'
import ImageUpload from '../Common/ImageUpload'
import { Button } from '../../../Common/components/Button'
import AdminStore from '../../stores/AdminStore'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { getUserDisplayableErrorMessage } from '../../../Common/utils/APIUtils'
toast.configure()
interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
}
interface AddResourceProps extends InjectedProps {}
@inject('adminStore')
@observer
class AddResource extends Component<AddResourceProps> {
   @observable name: string
   @observable link: string
   @observable description: string
   @observable imageLink: string
   @observable service: string
   @observable displayError: boolean
   @observable isLoading: boolean
   constructor(props) {
      super(props)
      this.name = ''
      this.link = ''
      this.description = ''
      this.imageLink =
         'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/bacc8218-5885-4594-9d8b-af57bf3c256a@2x.png'
      this.service = ''
      this.displayError = false
      this.isLoading = false
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
   onClickAddCreate = () => {
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
         this.addResourceDetails(requestObject)
      } else {
         this.displayError = true
      }
   }
   async addResourceDetails(requestObject) {
      this.isLoading = true
      const {
         adminStore: { addResource }
      } = this.getInjectedProps()
      await addResource(requestObject)
      const {
         adminStore: { getAddResourceAPIStatus, getAddResourceAPIError: error }
      } = this.getInjectedProps()
      if (getAddResourceAPIStatus === 200) {
         this.isLoading = false
         this.displayToaster('Added Successfully')
         const { history } = this.getInjectedProps()
         goToAdminDashboardResources(history)
      } else {
         this.displayToaster(getUserDisplayableErrorMessage(error))
         this.isLoading = false
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
         <AddResourceStyle>
            <Heading>Add Resource</Heading>
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
               image={this.imageLink}
               onUploadImage={this.onUploadImage}
               displayError={this.displayError}
            />

            <Button
               text={'Create'}
               onClick={this.onClickAddCreate}
               buttonType={'rectangular'}
               buttonVariant={'filled'}
               css={ButtonCss}
               disabled={this.isLoading}
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

export default withRouter(withHeader(AddResource))
