import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { FilledButtonStyle } from './styledComponents'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
interface ButtonProps {
   text: String
   textTypo?: any
   onClick: (event: any) => void
   disabled?: boolean
   buttonType?: string
   buttonVariant?: string
   css: any
}
class FilledButton extends Component<ButtonProps> {
   render() {
      const { text, css, onClick, disabled } = this.props
      return (
         <FilledButtonStyle buttonStyles={css} onClick={onClick}>
            {!disabled ? text : <AiOutlineLoading3Quarters />}
         </FilledButtonStyle>
      )
   }
}

export default FilledButton
