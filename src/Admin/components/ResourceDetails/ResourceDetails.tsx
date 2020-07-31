import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import {
   Button as UpdateResource,
   Button as DeleteButton
} from '../../../Common/components/Button'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import withHeader from '../../../Common/Hocs'

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

interface ResourceDetailsProps extends RouteComponentProps {
   doNetWorkCallForResourceDetails: () => void
   doNetWorkCallForResourceItems: () => void
   onClickUpdateResource: () => void
   onClickDeleteResource: () => void
   onClickResourcesButton: () => void
   onClickAddResourceItem: () => void
   onClickDeleteResourceItems: (resourceId) => void
   onClickUpdateResourceItem: () => void
   resourceId: number
   resourcesDetailsResponse: any
   getResourceDetailsAPIStatus: any
   getResourceDetailsAPIError: any
   resourceDetailsPaginationStore: any
   selectedResourceItemsCount: number
}

@observer
class ResourceDetails extends Component<ResourceDetailsProps> {
   @action.bound
   renderResourceDetails() {
      const { resourcesDetailsResponse: details } = this.props
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
         getResourceDetailsAPIStatus,
         getResourceDetailsAPIError,
         resourceDetailsPaginationStore
      } = this.props
      const {
         onClickResourcesButton,
         onClickUpdateResource,
         onClickDeleteResource,
         onClickAddResourceItem,
         onClickDeleteResourceItems,
         doNetWorkCallForResourceItems,
         doNetWorkCallForResourceDetails,
         selectedResourceItemsCount,
         onClickUpdateResourceItem
      } = this.props
      return (
         <ResourceDetailsPage>
            <ResourceDetailsPageStyle>
               <PreviousPageButton
                  buttonText={'Resources'}
                  onClick={onClickResourcesButton}
               />
               <LoadingWrapperWithFailure
                  apiStatus={getResourceDetailsAPIStatus}
                  apiError={getResourceDetailsAPIError}
                  renderSuccessUI={this.renderResourceDetails}
                  onRetryClick={doNetWorkCallForResourceDetails}
               />

               <FooterButtons>
                  <UpdateResource
                     text={'Update'}
                     onClick={onClickUpdateResource}
                     buttonType={'rectangular'}
                     buttonVariant={'filled'}
                     css={ButtonCss}
                     isLoading={false}
                  />
                  <DeleteButton
                     text={'Delete'}
                     onClick={onClickDeleteResource}
                     buttonType={'rectangular'}
                     buttonVariant={'filled'}
                     css={ButtonCss}
                     isLoading={false}
                  />
               </FooterButtons>
               <ResourceItemsList
                  onClickAddResourceItem={onClickAddResourceItem}
                  onClickDeleteResourceItems={onClickDeleteResourceItems}
                  resourceItemsDetails={resourceDetailsPaginationStore}
                  doNetWorkCallForResourceItems={doNetWorkCallForResourceItems}
                  selectedResourceItemsCount={selectedResourceItemsCount}
                  onClickUpdateResourceItem={onClickUpdateResourceItem}
               />
            </ResourceDetailsPageStyle>
         </ResourceDetailsPage>
      )
   }
}

export default withRouter(withHeader(ResourceDetails))
