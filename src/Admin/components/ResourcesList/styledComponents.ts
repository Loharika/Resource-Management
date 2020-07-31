import styled from '@emotion/styled'
import colors from '../../../Common/Theme/Colors.json'
import { css } from '@emotion/core'
export const ResourceListStyle = styled.div`
   width: 90%;
   min-height: 700px;
   display: flex;
   flex-direction: column;
   background-color: ${colors.whiteTwo};
   align-self: center;
`
export const SearchFieldCss = css`
   width: 60%;
   margin-left: 35px;
`
export const ResourceListCards = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   margin: 35px 0px;
`
export const PaginationCss = css`
   align-self: left;
   display: flex;
   justify-content: flex-end;
   margin-top: auto;
`
