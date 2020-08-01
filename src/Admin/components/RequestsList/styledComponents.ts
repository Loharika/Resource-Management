import styled from '@emotion/styled'
import colors from '../../../Common/Theme/Colors.json'
import { css } from '@emotion/core'
import { Typo12RubikMedium } from '../../../Common/styleGuides/Typos'
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
export const Buttons = styled.div`
   display: flex;
   align-self: center;
`
export const AcceptButtonCss = css`
   width: 80%;
   height: 35px;
   border-radius: 4px;
   background-color: ${colors.greenishTeal};
   color: white;
   margin: 3px;
   padding: 10px;
   border: none;
   font-weight: bold;
`
export const RejectButtonCss = css`
   width: 80%;
   height: 35px;
   border-radius: 4px;
   background-color: ${colors.neonRed};
   color: white;
   margin: 3px;
   padding: 10px;
   border: none;
   font-weight: bold;
`
export const Reason = styled.textarea`
   width: 100%;
   height: 50px;
   padding: 5px;
   border: 1px solid ${colors.lightBlueGrey};
   border-radius: 3px;
`
export const Label = styled(Typo12RubikMedium)`
   color: ${colors.lightBlueGrey};
`
