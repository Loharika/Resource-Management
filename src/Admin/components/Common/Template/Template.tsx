import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
   TemplateStyle,
   TemplateImage,
   Details,
   TemplateCard
} from './styledComponents'

import image from '../../../../Common/Images/61afd424-c83b-4d35-90ee-8222e064e6f6.png'

import { withRouter, RouteComponentProps } from 'react-router-dom'
import PreviousPageButton from '../PreviousPageButton'
interface TemplateProps extends RouteComponentProps {
   buttonText: string
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
                  <PreviousPageButton
                     buttonText={buttonText}
                     onClick={onClickGoBackButton}
                  />
                  {renderChildComponent()}
               </Details>
               <TemplateImage src={image} alt={'templateImage'} />
            </TemplateCard>
         </TemplateStyle>
      )
   }
}

export default withRouter(Template)
