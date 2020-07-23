import styled from '@emotion/styled'
import colors from '../../../Common/Theme/Colors.json'
export const ResourceCardStyle = styled.div`
   width: 330px;
   height: 150px;

   border: 1px solid ${colors.lightBlueGrey};
   padding: 15px 10px;
   margin: 10px 10px;
   border-radius: 4px;
   background-color: ${colors.white};
`
export const ResourceName = styled.div``
export const ResourceImage = styled.img`
   width: 50px;
   height: 50px;
   margin: 5px;
`
export const ResourceLink = styled.a``
export const ResourceService = styled.div``
export const ResourceDescription = styled.div`
   white-space: nowrap;
   width: 95%;
   overflow: hidden;
   text-overflow: ellipsis;
`
export const ResourceLogoWithName = styled.div`
   display: flex;
   align-items: center;
`
export const ResourceNameService = styled.div``
