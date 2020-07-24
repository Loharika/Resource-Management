import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
import { Label } from '../InputField/styledComponents'

interface CssProps {
   css?: any
}
export const TextAreaFieldStyle = styled.textarea`
   width: 100%;
   min-height: 100px;
   border: 2px solid ${colors.lightBlueGrey};
   background-color: white;
   padding: 10px;

   :focus {
      outline: none;
   }
   ${(props: CssProps) => props.css};
`
export { Label }
export const TextAreaWithLabel = styled.div`
   display: flex;
   flex-direction: column;
   ${(props: CssProps) => props.css}
`
export const ErrorMessage = styled.span`
   color: ${colors.neonRed};
   font-size: 10px;
`
