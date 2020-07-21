import React from 'react'
import { inject, observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'

import {
   UserImage,
   UserProfileDashboard,
   UserProfileView,
   NameEmailGender,
   JobDepartment,
   UserDetail,
   UserDetailElement
} from './styledComponents'
import { Label as UserDetailLabel } from '../../styleGuides/StyleGuides'

interface UserProfileProps extends WithTranslation {}

@observer
class UserProfile extends React.Component<UserProfileProps> {
   render() {
      const userDetails = {
         name: 'Loharika',
         email: 'loharikapatnam74@gmail.com',
         gender: 'Female',
         jobRole: 'none',
         department: 'none'
      }
      const { t } = this.props
      return (
         <UserProfileDashboard>
            <UserProfileView>
               <UserImage
                  src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                  alt='user-profile'
               />
               <NameEmailGender>
                  <UserDetail>
                     <UserDetailLabel>{t('auth:auth.name')}:</UserDetailLabel>{' '}
                     <UserDetailElement
                        value={userDetails.name}
                        type='text'
                        onChange={() => {}}
                     />
                  </UserDetail>
                  <UserDetail>
                     <UserDetailLabel>{t('auth:auth.email')}:</UserDetailLabel>{' '}
                     <UserDetailElement
                        value={userDetails.email}
                        type='text'
                        onChange={() => {}}
                     />
                  </UserDetail>
                  <UserDetail>
                     <UserDetailLabel>{t('auth:auth.gender')}:</UserDetailLabel>{' '}
                     <UserDetailElement
                        value={userDetails.gender}
                        type='text'
                        onChange={() => {}}
                     />
                  </UserDetail>
               </NameEmailGender>
               <JobDepartment>
                  <UserDetail>
                     <UserDetailLabel>
                        {t('auth:auth.jobRole')}:
                     </UserDetailLabel>
                     <UserDetailElement
                        value={userDetails.jobRole}
                        type='text'
                        onChange={() => {}}
                     />
                  </UserDetail>
                  <UserDetail>
                     <UserDetailLabel>
                        {t('auth:auth.department')}:
                     </UserDetailLabel>{' '}
                     <UserDetailElement
                        value={userDetails.department}
                        type='text'
                        onChange={() => {}}
                     />
                  </UserDetail>
               </JobDepartment>
            </UserProfileView>
         </UserProfileDashboard>
      )
   }
}
export default withTranslation('translation', { withRef: true })(UserProfile)
