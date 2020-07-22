import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'

interface CheckBoxStyleProps {
   isChecked: boolean
}
export const CheckBoxStyle = styled.input<CheckBoxStyleProps>`
   padding: 5px;
   width: 20px;
   height: 20px;
   border: 1px solid
      ${props => (props.isChecked ? colors.brightBlue : colors.lightBlueGrey)};
   background-color: ${props =>
      props.isChecked ? colors.lightBlueGrey : colors.neonRed};
   background: #ff0000;
   :focus {
      outline: none;
   }
`
