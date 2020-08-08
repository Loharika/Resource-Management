import React, { Component } from 'react'
import { GetUserDetailsResponseObject } from '../../stores/types'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import {
   UserDetailsStyle,
   Details,
   Department,
   JobRole,
   Name,
   Image,
   UserDetailsPage,
   UserDetailsPageStyle
} from './styledComponents'
import PreviousPageButton from '../Common/PreviousPageButton'
import UserAccessableResourcesList from '../UserAccessableResourcesList'

interface UserDetailsProps {
   userDetails: GetUserDetailsResponseObject
   getUserDetailsAPIError: any
   getUserDetailsAPIStatus: any
   doNetWorkCalls: () => void
   onClickResourcesButton: () => void
}
@observer
class UserDetails extends Component<UserDetailsProps> {
   renderUserDetails = () => {
      const { userDetails: details } = this.props
      return (
         <UserDetailsStyle>
            <Image src={details.user_image} />
            <Details>
               <Name>{details.user_name}</Name>
               <Department>{details.department}</Department>
               <JobRole>{details.job_role}</JobRole>
            </Details>
         </UserDetailsStyle>
      )
   }

   render() {
      const {
         getUserDetailsAPIStatus,
         getUserDetailsAPIError,
         doNetWorkCalls,
         onClickResourcesButton
      } = this.props
      return (
         <UserDetailsPage>
            <UserDetailsPageStyle>
               <PreviousPageButton
                  buttonText={'Users'}
                  onClick={onClickResourcesButton}
               />
               <LoadingWrapperWithFailure
                  apiStatus={getUserDetailsAPIStatus}
                  apiError={getUserDetailsAPIError}
                  renderSuccessUI={this.renderUserDetails}
                  onRetryClick={doNetWorkCalls}
               />
               <UserAccessableResourcesList
               
               />
               {/* <ResourceItemsList
               onClickAddResourceItem={onClickAddResourceItem}
               resourceItemsDetails={resourceDetailsPaginationStore}
               doNetWorkCallForResourceItems={doNetWorkCallForResourceItems}
               selectedResourceItemsCount={selectedResourceItemsCount}
               onClickUpdateResourceItem={onClickUpdateResourceItem}
               onClickDeleteResourceItems={onClickDeleteResourceItems}
               onClickCheckBox={onClickCheckBox}
            /> */}
            </UserDetailsPageStyle>
         </UserDetailsPage>
      )
   }
}

export default UserDetails
