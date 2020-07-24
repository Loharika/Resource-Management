import styled from '@emotion/styled'
import colors from '../../../../Common/Theme/Colors.json'
export const ImageUploadStyle = styled.div`
   display: flex;
   flex-direction: column;
   :focus {
      outline: none;
   }
`
export const InputImageWithIcon = styled.div`
   display: flex;
   align-items: center;
`
export const InputImageFile = styled.input`
   color: grey;

   border-radius: 3px;
`
export const UploadButton = styled.button`
   border: 2px solid ${colors.lightBlueGrey};
   color: grey;
   padding: 3px;
   border-radius: 3px;
   width: 70px;
   margin: 5px;
   outline: none;
`
export const DefaultImage = styled.img`
   width: 50px;
   height: 50px;
   margin-right: 10px;
   border-radius: 5px;
`

export const ErrorMessage = styled.span`
   color: ${colors.neonRed};
   font-size: 10px;
`
