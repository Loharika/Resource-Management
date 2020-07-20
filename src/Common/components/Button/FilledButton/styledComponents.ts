import styled from '@emotion/styled'
import { BaseButton } from '../BaseButton/BaseButton'
interface buttonProps {
   buttonStyles?: any
}

export const FilledButtonStyle = styled.button`
   background-color: blue;
   ${(props: buttonProps) => props.buttonStyles}
`
