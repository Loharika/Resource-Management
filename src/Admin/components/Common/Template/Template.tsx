import React, { Component } from 'react'
import {
   TemplateStyle,
   TemplateImage,
   Details,
   GoBackButton,
   ButtonText
} from './styledComponents'
import image from '../../../../Common/Images/61afd424-c83b-4d35-90ee-8222e064e6f6.png'
import { MdChevronLeft } from 'react-icons/md'
import { observer } from 'mobx-react'
import colors from '../../../../Common/Theme/Colors.json'
interface TemplateProps {
   buttonText?: string
}
@observer
class Template extends Component<TemplateProps> {
   render() {
      const { buttonText } = this.props
      return (
         <TemplateStyle>
            <Details>
               <GoBackButton>
                  <MdChevronLeft size={25} color={colors.steel} />
                  <ButtonText>{buttonText}</ButtonText>
               </GoBackButton>
            </Details>
            <TemplateImage src={image} alt={'templateImage'} />
         </TemplateStyle>
      )
   }
}

export default Template
