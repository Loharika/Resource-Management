import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
interface OutlineButtonProps {
   buttonStyles: any
}
export const OutlineButtonStyle = styled.button`
   background-color: white;
   border: 2px solid ${colors.brightBlue};
   ${(props: OutlineButtonProps) => props.buttonStyles}
`
