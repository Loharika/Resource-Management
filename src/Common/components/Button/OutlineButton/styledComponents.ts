import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
import { css, jsx } from '@emotion/core'

export const loaderCss = css`
   border-radius: 4px;
   text-align: center;
   margin-left: 45%;
`
interface OutlineButtonProps {
   buttonStyles: any
   isDisabled?: boolean
}
export const OutlineButtonStyle = styled.button<OutlineButtonProps>`
   background-color: white;
   border: 2px solid ${colors.brightBlue};
   ${(props: OutlineButtonProps) => props.buttonStyles}
   opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`
