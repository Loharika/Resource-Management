import React, { ReactComponentElement } from 'react'
import { observer, inject } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import {
   HeaderStyle,
   LogoImageContainer,
   ProfileAndSignOut,
   UserProfile,
   ButtonCss
} from './styledComponents'
import AuthStore from '../../../Authentication/stores/AuthStore'
import {
   goToUserDashboard,
   goToSignInPage
} from '../../../Authentication/utils/NavigationalUtils'
import { LogoImage } from '../../../Authentication/components/Common/LogoImage'
import { Button } from '../Button'
import { action } from 'mobx'
import { goToAddResourcePage } from '../../../Admin/utils/NavigationalUtils'
interface HeaderProps extends RouteComponentProps {}

interface InjectedProps extends HeaderProps {
   authStore: AuthStore
}
@inject('authStore')
@observer
class Header extends React.Component<HeaderProps> {
   getInjectedProps = () => this.props as InjectedProps
   onClickUserProfile = () => {
      const { history } = this.getInjectedProps()
      goToUserDashboard(history)
   }
   @action.bound
   onClickAddResource() {
      const { history } = this.getInjectedProps()
      goToAddResourcePage(history)
   }
   onClickSignOut = () => {
      const { history } = this.getInjectedProps()
      goToSignInPage(history)
      const {
         authStore: { userSignOut, getUserSignInAPIResponse }
      } = this.getInjectedProps()
      const object = { user_id: getUserSignInAPIResponse.user_id }
      userSignOut(object)
   }
   @action.bound
   showAddButton() {
      const {
         history: { location }
      } = this.props
      let typeOfPage = location.pathname.split('/')[
         location.pathname.split('/').length - 1
      ]
      return typeOfPage === 'resources'
   }
   render() {
      const {
         onClickSignOut,
         onClickUserProfile,
         onClickAddResource,
         showAddButton
      } = this
      return (
         <HeaderStyle>
            <LogoImageContainer>
               <LogoImage />
            </LogoImageContainer>
            <ProfileAndSignOut showAddButton={showAddButton()}>
               {showAddButton() ? (
                  <Button
                     text={'Add Resource'}
                     onClick={onClickAddResource}
                     buttonType={'rectangular'}
                     buttonVariant={'filled'}
                     css={ButtonCss}
                  />
               ) : (
                  ''
               )}
               <Dropdown
                  closeOnEscape={true}
                  icon={
                     <UserProfile
                        src='https://www.logolynx.com/images/logolynx/b4/b4ef8b89b08d503b37f526bca624c19a.jpeg'
                        alt={'userImage'}
                     />
                  }
               >
                  <Dropdown.Menu>
                     <Dropdown.Item
                        text='Edit Profile'
                        value={'editProfile'}
                        onClick={onClickUserProfile}
                        data-testid={'user-profile'}
                     />
                     <Dropdown.Item
                        text='Sign Out'
                        value={'signOut'}
                        onClick={onClickSignOut}
                        data-testid={'signout-button'}
                     />
                  </Dropdown.Menu>
               </Dropdown>
            </ProfileAndSignOut>
         </HeaderStyle>
      )
   }
}
export default withRouter(Header)
