import React, { Component } from 'react'
import { OutlineButtonStyle } from './styledComponents'

interface ButtonProps {
   text: String
   textTypo?: any
   onClick: (event: any) => void
   disabled?: boolean
   buttonType?: string
   buttonVariant?: string
   css: any
}
class OutlineButton extends Component<ButtonProps> {
   render() {
      const { text, css, onClick } = this.props
      return (
         <OutlineButtonStyle buttonStyles={css} onClick={onClick}>
            {text}
         </OutlineButtonStyle>
      )
   }
}

export default OutlineButton
