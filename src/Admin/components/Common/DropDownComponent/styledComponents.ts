import styled from '@emotion/styled'
interface DropDownStyleProps {
   css: any
}
export const DropDownStyle = styled.div`
   width: 100px;
   display: flex;
   align-items: center;
   ${(props: DropDownStyleProps) => props.css}
`
export const DropDownIcon = styled.div`
   margin: 5px;
`
