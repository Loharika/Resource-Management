import styled from '@emotion/styled'
import colors from '../../../Common/Theme/Colors.json'
import { Typo14WhiteHKGroteskSemiBold } from '../../../Common/styleGuides/Typos'

type SelectorTabProps = {
   isSelected: boolean
}

export const DashboardStyle = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${colors.whiteTwo};
`
export const Selectors = styled.div`
   display: flex;
   align-self: center;
   margin: 30px 0px;
`

export const SelectorTab = styled.div<SelectorTabProps>`
   padding: 10px 15px;
   color: ${props => (!props.isSelected ? colors.black : colors.white)};
   font-weight: bold;

   border: 2px solid ${colors.lightBlueGrey};
   background-color: ${props =>
      props.isSelected ? colors.brightBlue : colors.white};
`
export const SelectorText = styled(Typo14WhiteHKGroteskSemiBold)``
