import styled from '@emotion/styled'
import colors from '../../Theme/Colors.json'
import { css } from '@emotion/core'
interface ProfileAndSignOutProps {
   showAddButton: boolean
}
export const Requests = styled.div`
   padding: 5px;

   border-radius: 5px;
   margin: 5px;
`
export const Shares = styled.div`
   padding: 5px;

   border-radius: 5px;
   margin: 5px;
`
export const HeaderStyle = styled.div`
   width: 100%;
   position: -webkit-sticky;
   position: sticky;
   top: 0px;
   height: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${colors.white};
   flex-wrap: wrap;
   z-index: 20;
   border-bottom: 2px solid ${colors.lightBlueGrey};
`
export const RiderInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`
export const UserProfileIconElement = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
`
export const LogoImageContainer = styled.div`
   margin: 5px 30px;
`
export const SignOutButton = styled.button`
   padding: 5px 10px;
   color: white;
   background-color: ${colors.brightBlue};
   border-radius: 5px;
`
export const ProfileAndSignOut = styled.div<ProfileAndSignOutProps>`
   width: 200px;
   display: flex;
   justify-content: ${props =>
      props.showAddButton ? 'space-between' : 'flex-end'};
   align-items: center;
   margin-right: 60px;
   transition: all;
`
export const UserProfile = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 20px;
   margin-top: -10px;
`
export const HomePage = styled.button`
   padding: 5px 10px;
   border-radius: 5px;
`
export const ButtonCss = css`
   height: 40px;
   border-radius: 4px;
   background-color: ${colors.brightBlue};
   color: white;
   font-weight: bold;
   padding: 0px 15px;
`
