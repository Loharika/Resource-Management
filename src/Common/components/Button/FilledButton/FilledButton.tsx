import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { FilledButtonStyle, loaderCss } from './styledComponents'
import MoonLoader from 'react-spinners/MoonLoader'
interface ButtonProps {
   text: String
   textTypo?: any
   onClick: (event: any) => void
   disabled?: boolean
   buttonType?: string
   buttonVariant?: string
   isLoading?: boolean
   css: any
}
class FilledButton extends Component<ButtonProps> {
   render() {
      const { text, css, onClick, disabled, isLoading } = this.props
      return (
         <FilledButtonStyle
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
         </FilledButtonStyle>
      )
   }
}

export default FilledButton
