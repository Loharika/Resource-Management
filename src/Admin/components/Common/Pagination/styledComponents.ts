import styled from '@emotion/styled'

import colors from '../../../../Common/Theme/Colors.json'
interface CssProps {
   css?: any
}

export const PaginationStyle = styled.div`
   ${(props: CssProps) => props.css}
`
