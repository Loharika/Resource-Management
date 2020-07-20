import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { FilledButtonStyle } from './styledComponents'
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
      const { text, css, onClick} = this.props
      return <FilledButtonStyle buttonStyles={css} onClick={onClick}> {text}</FilledButtonStyle>
   }
}

export default FilledButton
