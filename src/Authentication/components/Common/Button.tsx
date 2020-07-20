import React from 'react'
import { observer } from 'mobx-react'
import { ButtonStyle } from '../../styledComponents/styledComponents'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
type ButtonProps = {
   buttonText: string
   onClickFunction: (event: any) => void
   isLoading: boolean
}

@observer
class Button extends React.Component<ButtonProps> {
   render() {
      const { onClickFunction, buttonText, isLoading } = this.props
      // return <ButtonStyle onClick={onClickFunction}> {buttonText}</ButtonStyle>
      return (
         <React.Fragment>
            <ButtonStyle onClick={onClickFunction}>
               {!isLoading ? buttonText : <AiOutlineLoading3Quarters />}
            </ButtonStyle>
         </React.Fragment>
      )
   }
}
export { Button }
