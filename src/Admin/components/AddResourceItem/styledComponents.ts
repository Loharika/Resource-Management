import styled from '@emotion/styled'
import { Typo32DarkBlueGreyRubikRegular } from '../../../Authentication/styleGuides/StyleGuides'
import { css } from '@emotion/core'
import colors from '../../../Common/Theme/Colors.json'
export const AddResourceStyle = styled.div`
   width: 50%;
   height: 550px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin-top: 50px;
`
export const Heading = styled(Typo32DarkBlueGreyRubikRegular)`
   width: full;
   font-size: 40px;
`
export const ButtonCss = css`
   width: 100px;
   height: 40px;
   border-radius: 4px;
   background-color: ${colors.brightBlue};
   color: white;
   margin: 3px;
   padding: 3px;
   align-self: center;
   outline: none;
   font-weight: bold;
`
