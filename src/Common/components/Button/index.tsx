import React from 'react'
import { BaseButton } from './BaseButton/BaseButton'
import OutlineButton from './OutlineButton/OutlineButton'
import FilledButton from './FilledButton/FilledButton'

import {
   buttonVariant as ButtonVariant,
   buttonType as ButtonType
} from '../../constants/ButtonConstants'
import {
   rectangularButtonStyle,
   ovalButtonStyle,
   defaultButtonStyle
} from './styledComponents'

interface ButtonProps {
   text: String
   textTypo?: any
   onClick: (event: any) => void
   disabled?: boolean
   buttonType?: string
   buttonVariant?: string
   css: any
}
class Button extends React.Component<ButtonProps> {
   getButtonType = () => {
      const { buttonType } = this.props
      if (buttonType !== undefined) {
         switch (ButtonType[buttonType.toLowerCase()]) {
            case 'RECTANGULAR': {
               return rectangularButtonStyle
            }
            case 'OVAL': {
               return ovalButtonStyle
            }
         }
      } else {
         return defaultButtonStyle
      }
   }
   renderButton = () => {
      const { buttonVariant, ...otherProps } = this.props
      if (buttonVariant !== undefined) {
         switch (ButtonVariant[buttonVariant.toLowerCase()]) {
            case 'OUTLINE': {
               return <OutlineButton {...otherProps} />
            }
            case 'FILLED': {
               return <FilledButton {...otherProps} />
            }
            default:
               return new Error('invalid variant button type')
         }
      } else {
         return (
            <BaseButton text={this.props.text} onClick={this.props.onClick} />
         )
      }
   }
   render() {
      return this.renderButton()
   }
}
export { Button }
