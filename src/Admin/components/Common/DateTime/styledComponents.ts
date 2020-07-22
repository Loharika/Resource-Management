import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
export const DateAndTimeStyle = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 10px 0px;
   width: 250px;
   flex-grow: 1;
   margin-right: auto;
`
export const DataAndTimeDisplay = styled.div`
   border: 1px solid ${colors.lightgrey};
   padding: 10px;
   font-size: 13px;
   margin: 8px 0px;
   min-width: 100%;
   display: flex;
   justify-content: start;
   align-items: center;
   margin-right: auto;
   flex-shrink: 1;
`

export const Star = styled.sup`
   color: red;
`

export const Icon = styled.div`
   margin-right: 5px;
`

export const Label = styled.label`
   width: 100%;
   /*font-family: HKGrotesk;*/
   font-size: 12px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   letter-spacing: 0.12px;
   color: ${colors.steel};
   margin: 2px;
`
