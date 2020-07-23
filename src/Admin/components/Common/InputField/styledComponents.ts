import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
import { Typo12SteelHKGroteskSemiBold } from '../../../../Common/styleGuides/Typos'

interface CssProps {
   css?: any
}
export const InputFieldStyle = styled.input`
   border: 2px solid ${colors.lightBlueGrey};
   padding: 7px 10px;
`
export const InputFieldWithLabel = styled.div`
   display: flex;
   flex-direction: column;
   ${(props: CssProps) => props.css}
`
export const LabelWithOutTypo = styled.label`
   color: ${colors.lightBlueGrey};
   font-size: 15px;
   padding: 5px 0px;
`
export const LabelWithTypo = styled(Typo12SteelHKGroteskSemiBold)`
   color: ${colors.lightBlueGrey};
   font-size: 15px;
   padding: 5px 0px;
`
export const Label = styled(LabelWithTypo)``
