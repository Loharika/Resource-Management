import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
interface CssProps {
   css?: any
}

export const SearchFieldStyle = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   border: 2px solid ${colors.lightBlueGrey};
   background-color: ${colors.white};
   padding: 4px 4px;
   border-radius: 2px;
   ${(props: CssProps) => props.css}
`
export const InputFieldStyle = styled.input`
   padding: 4px 4px;
   :focus {
      outline: none;
   }
`
