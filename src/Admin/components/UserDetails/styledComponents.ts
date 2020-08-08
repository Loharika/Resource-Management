import { css } from '@emotion/core'
import colors from '../../../Common/Theme/Colors.json'
import styled from '@emotion/styled'
import {
   Typo32DarkBlueGreyHKGroteskRegular,
   Typo12DarkBlueGreyHKGroteskSemiBold
} from '../../../Common/styleGuides/Typos'

export const UserDetailsStyle = styled.div`
   display: flex;
   margin: 15px 0px;
   align-items: center;
`
export const UserImageWithDetails = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

export const Image = styled.img`
   width: 70px;
   height: 70px;
   border-radius: 50%;
   margin: 15px;
`

export const Details = styled.div`
   display: flex;
   flex-direction: column;
`

export const Name = styled(Typo32DarkBlueGreyHKGroteskRegular)``
export const Department = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``
export const JobRole = styled(Typo12DarkBlueGreyHKGroteskSemiBold)``
export const UserDetailsPage = styled.div`
   display: flex;

   justify-content: center;
`
export const UserDetailsPageStyle = styled.div`
   width: 90%;
   align-self: center;
`
