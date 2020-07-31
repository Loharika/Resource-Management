import React, { Component } from 'react'
import { OutlineButtonStyle, loaderCss } from './styledComponents'
import MoonLoader from 'react-spinners/MoonLoader'
interface ButtonProps {
   text: String
   textTypo?: any
   onClick: (event: any) => void
   disabled?: boolean
   buttonType?: string
   buttonVariant?: string
   css: any
   isLoading?: boolean
}
class OutlineButton extends Component<ButtonProps> {
   render() {
      const { text, css, onClick, disabled, isLoading } = this.props

      return (
         <OutlineButtonStyle
            buttonStyles={css}
            onClick={onClick}
            disabled={disabled}
            isDisabled={disabled}
         >
            {!isLoading ? (
               text
            ) : (
               <MoonLoader
                  size={18}
                  css={loaderCss}
                  color={'#ffffff'}
                  loading={disabled}
               />
            )}
         </OutlineButtonStyle>
      )
   }
}

export default OutlineButton
