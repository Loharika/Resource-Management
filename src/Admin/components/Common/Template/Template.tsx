import React, { Component, FunctionComponent } from 'react'
import {
   TemplateStyle,
   TemplateImage,
   Details,
   GoBackButton,
   ButtonText,
   TemplateCard,
   HeaderButton
} from './styledComponents'
import image from '../../../../Common/Images/61afd424-c83b-4d35-90ee-8222e064e6f6.png'
import { MdChevronLeft } from 'react-icons/md'
import { observer } from 'mobx-react'
import colors from '../../../../Common/Theme/Colors.json'
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface TemplateProps extends RouteComponentProps {
   buttonText?: string
   renderChildComponent: () => any
   onClickButton: (history) => void
}
@observer
class Template extends Component<TemplateProps> {
   onClickGoBackButton = () => {
      const { onClickButton } = this.props
      const { history } = this.props
      onClickButton(history)
   }
   render() {
      const { buttonText, renderChildComponent } = this.props
      const { onClickGoBackButton } = this
      return (
         <TemplateStyle>
            <TemplateCard>
               {' '}
               <Details>
                  <HeaderButton>
                     <GoBackButton onClick={onClickGoBackButton}>
                        <MdChevronLeft size={25} color={colors.steel} />
                        <ButtonText>{buttonText}</ButtonText>
                     </GoBackButton>
                  </HeaderButton>
                  {renderChildComponent()}
               </Details>
               <TemplateImage src={image} alt={'templateImage'} />
            </TemplateCard>
         </TemplateStyle>
      )
   }
}

export default withRouter(Template)
