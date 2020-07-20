import React from 'react'
import { BaseButtonStyle, Text } from './styledComponents'

interface BaseButtonProps {
   text: String
   onClick: (event: any) => void
}
class BaseButton extends React.Component<BaseButtonProps> {
   render() {
      const { text, onClick } = this.props
      return (
         <BaseButtonStyle onClick={onClick}>
            <Text>{text}</Text>
         </BaseButtonStyle>
      )
   }
}
export { BaseButton }
