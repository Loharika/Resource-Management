import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../../../Common/Theme/Colors.json'
export const TableStyle = styled.div`
   width: 100%;
`
export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 30px 0px;
`
export const Title = styled.div`
   font-size: 20px;
`
export const SearchSortFields = styled.div`
   width: 60%;
   display: flex;
   justify-content: flex-end;
`
export const ResourceItemsStyle = styled.div`
   width: 100%;
`
export const SearchFieldStyle = styled.div`
   width: 90%;
   display: flex;
   margin: 0px 30px;
`

export const SearchFieldCss = css`
   width: 100%;
   margin-right: 50px;
`
export const DropDownCss = css`
   width: 100px;
`
export const Footer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 10px 15px;
`
export const AddButtonGreenCss = css`
   border-radius: 4px;
   background-color: ${colors.greenishTeal};
   color: white;
   font-weight: bold;
   padding: 7px 10px;
   margin: 0px 10px;
`

export const AddButtonGreyCss = css`
   border-radius: 4px;
   background-color: ${colors.lightBlueGrey};
   color: white;
   font-weight: bold;
   padding: 7px 10px;
   margin: 0px 10px;
`
export const DelButtonRedCss = css`
   border-radius: 4px;
   background-color: ${colors.neonRed};
   color: white;
   font-weight: bold;
   padding: 7px 10px;
   margin: 0px 10px;
`

export const DelButtonGreyCss = css`
   border-radius: 4px;
   background-color: ${colors.lightBlueGrey};
   color: white;
   font-weight: bold;
   padding: 7px 10px;
   margin: 0px 10px;
`
export const Buttons = styled.div``

export const PaginationCss = css`
   align-self: left;
`
