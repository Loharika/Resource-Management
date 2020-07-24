import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { action } from 'mobx'
import {
   Button as UpdateResource,
   Button as DeleteButton
} from '../../../Common/components/Button'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import withHeader from '../../../Common/Hocs'
import AdminStore from '../../stores/AdminStore'
import {
   goToUpdateResource,
   goToAdminDashboardResources
} from '../../utils/NavigationalUtils'
import ResourceItemsList from '../ResourceItemsList'
import PreviousPageButton from '../Common/PreviousPageButton'
import {
   ButtonCss,
   ResourceDetailsStyle,
   ResourceImageWithName,
   Name,
   Id,
   ResourceNameIdLink,
   Link,
   ResourceImage,
   ResourceDetailsPage,
   ResourceDetailsPageStyle,
   Description,
   LinkTag,
   FooterButtons
} from './styledComponents'
interface InjectedProps extends RouteComponentProps {
   adminStore: AdminStore
}
interface ResourceDetails extends InjectedProps {}
@inject('adminStore')
@observer
class ResourceDetails extends Component<ResourceDetails> {
   getInjectedProps = () => this.props as InjectedProps
   componentDidMount() {
      
      this.doNetWorkCallForResourceDetails()
   }
   @action.bound
   getResourceId() {
      const {
         match: { params }
      } = this.getInjectedProps()
      return params['resourceId']
   }
   doNetWorkCallForResourceDetails = () => {
      const {
         adminStore: { getResourceDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      getResourceDetails(requestObject)
   }
   doNetWorkCallForResourceItems = () => {
      const {
         adminStore: { getResourceDetails }
      } = this.getInjectedProps()
      let requestObject = {
         resource_id: this.getResourceId()
      }
      getResourceDetails(requestObject)
   }
   @action.bound
   onClickUpdateResource() {
      const { history } = this.props
      goToUpdateResource(history, this.getResourceId())
   }
   @action.bound
   onClickDeleteResource = () => {
      alert('delete')
   }
   onClickResourcesButton = () => {
      const { history } = this.props
      goToAdminDashboardResources(history)
   }
   @action.bound
   renderResourceDetails() {
      const {
         adminStore: { resourcesDetailsResponse: details }
      } = this.getInjectedProps()
      return (
         <ResourceDetailsStyle>
            <ResourceImageWithName>
               <ResourceImage src={details.resource_image} />
               <ResourceNameIdLink>
                  <Name>{details.name}</Name>
                  <Id>{details.resource_id}</Id>
                  <LinkTag href={details.link}>
                     <Link>{details.link}</Link>
                  </LinkTag>
               </ResourceNameIdLink>
            </ResourceImageWithName>
            <Description>{details.description}</Description>
         </ResourceDetailsStyle>
      )
   }
   render() {
      const {
         adminStore: {
            getResourceDetailsAPIStatus,
            getResourceDetailsAPIError,
            resourcesDetailsResponse
         }
      } = this.getInjectedProps()

      return (
         <ResourceDetailsPage>
            <ResourceDetailsPageStyle>
               <PreviousPageButton
                  buttonText={'Resources'}
                  onClick={this.onClickResourcesButton}
               />
               <LoadingWrapperWithFailure
                  apiStatus={getResourceDetailsAPIStatus}
                  apiError={getResourceDetailsAPIError}
                  renderSuccessUI={this.renderResourceDetails}
                  onRetryClick={this.doNetWorkCallForResourceDetails}
               />

               <FooterButtons>
                  <UpdateResource
                     text={'Update'}
                     onClick={this.onClickUpdateResource}
                     buttonType={'rectangular'}
                     buttonVariant={'filled'}
                     css={ButtonCss}
                  />
                  <DeleteButton
                     text={'Delete'}
                     onClick={this.onClickDeleteResource}
                     buttonType={'rectangular'}
                     buttonVariant={'filled'}
                     css={ButtonCss}
                  />
               </FooterButtons>
               <ResourceItemsList />
            </ResourceDetailsPageStyle>
         </ResourceDetailsPage>
      )
   }
}

export default withRouter(withHeader(ResourceDetails))
