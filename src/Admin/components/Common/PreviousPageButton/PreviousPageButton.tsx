import React, { Component } from 'react'
import {
   HeaderButton,
   GoBackButton,
   ButtonText
} from '../../../../Common/styledComponents/styledComponents'
import { MdChevronLeft } from 'react-icons/md'
import { observer } from 'mobx-react'
import colors from '../../../../Common/Theme/Colors.json'
interface PreviousPageButtonProps {
   onClick: () => void
   buttonText: string
}
@observer
class PreviousPageButton extends Component<PreviousPageButtonProps> {
   render() {
      const { onClick, buttonText } = this.props
      return (
         <HeaderButton>
            <GoBackButton onClick={onClick}>
               <MdChevronLeft size={25} color={colors.steel} />
               <ButtonText>{buttonText}</ButtonText>
            </GoBackButton>
         </HeaderButton>
      )
   }
}

export default PreviousPageButton
