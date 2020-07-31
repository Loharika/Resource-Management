import styled from '@emotion/styled'
import colors from '../../../Common/Theme/Colors.json'
import { css } from '@emotion/core'
export const TableStyle = styled.div``
export const RequestsListStyle = styled.div`
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
   margin: 25px 0px;
`
export const Header = styled.div`
   display: flex;
   justify-content: space-between;
`
export const SortAndFilter = styled.div`
   display: flex;
`
