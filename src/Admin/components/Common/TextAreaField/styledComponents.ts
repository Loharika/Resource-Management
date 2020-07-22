import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'

interface CssProps {
   css?: any
}
export const TextAreaFieldStyle = styled.textarea`
   border: 2px solid ${colors.lightBlueGrey};
   background-color: white;
   padding: 10px;
   :focus {
      outline: none;
   }
   ${(props: CssProps) => props.css};
`
