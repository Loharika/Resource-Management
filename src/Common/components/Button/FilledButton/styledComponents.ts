import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'

export const loaderCss = css`
   border-radius: 4px;
   text-align: center;
   margin-left: 45%;
`

interface buttonProps {
   buttonStyles?: any
   isDisabled?: boolean
}

export const FilledButtonStyle = styled.button<buttonProps>`
   background-color: blue;
   ${(props: buttonProps) => props.buttonStyles};
   opacity: ${props => (props.isDisabled ? 0.5 : 1)};
`
