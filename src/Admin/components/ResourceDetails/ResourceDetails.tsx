import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { action } from 'mobx'
import { Button as UpdateResource } from '../../../Common/components/Button'
import AdminStore from '../../stores/AdminStore'
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
   LinkTag
} from './styledComponents'
import {
   goToUpdateResource,
   goToAdminDashboardResources
} from '../../utils/NavigationalUtils'
import ResourceItemsList from '../ResourceItemsList'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import colors from '../../../Common/Theme/Colors.json'
import withHeader from '../../../Common/Hocs'
import {
   HeaderButton,
   GoBackButton,
   ButtonText
} from '../../../Common/styledComponents/styledComponents'
import { MdChevronLeft } from 'react-icons/md'
import PreviousPageButton from '../Common/PreviousPageButton'

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
   @action.bound
   onClickUpdateResource() {
      const {
         match: { params }
      } = this.getInjectedProps()
      let resourceId = params['resourceId']
      const { history } = this.props
      goToUpdateResource(history, resourceId)
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
               <ResourceItemsList />
               <UpdateResource
                  text={'Update'}
                  onClick={this.onClickUpdateResource}
                  buttonType={'rectangular'}
                  buttonVariant={'filled'}
                  css={ButtonCss}
               />
               <ResourceItemsList />
            </ResourceDetailsPageStyle>
         </ResourceDetailsPage>
      )
   }
}

export default withRouter(withHeader(ResourceDetails))
