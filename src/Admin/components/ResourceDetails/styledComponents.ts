import { css } from '@emotion/core'
import colors from '../../../Common/Theme/Colors.json'
import styled from '@emotion/styled'
import {
   Typo32DarkBlueGreyHKGroteskRegular,
   Typo14BrightBlueHKGroteskRegular,
   Typo16SteelHKGroteskRegular,
   Typo14SteelHKGroteskRegular
} from '../../../Common/styleGuides/Typos'
export const ButtonCss = css`
   height: 40px;
   border-radius: 4px;
   background-color: ${colors.brightBlue};
   color: white;
   font-weight: bold;
   padding: 0px 15px;
`
export const ResourceDetailsPage = styled.div`
   display: flex;

   justify-content: center;
`
export const ResourceDetailsPageStyle = styled.div`
   width: 90%;
   align-self: center;
`
export const ResourceDetailsStyle = styled.div`
   display: flex;
   flex-direction: column;
   margin: 15px 0px;
`
export const ResourceImageWithName = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
`
export const ResourceImage = styled.img`
   width: 70px;
   height: 70px;
   border-radius: 50%;
   margin: 15px;
`
export const ResourceNameIdLink = styled.div`
   display: flex;
   flex-direction: column;
`
export const Name = styled(Typo32DarkBlueGreyHKGroteskRegular)``
export const Id = styled(Typo16SteelHKGroteskRegular)``
export const Link = styled(Typo14BrightBlueHKGroteskRegular)``
export const LinkTag=styled.a``
export const Description = styled(Typo14SteelHKGroteskRegular)`
   margin: 15px;
   width: 50%;
`
