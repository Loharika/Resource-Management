import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
   TextAreaFieldStyle,
   TextAreaWithLabel,
   Label
} from './styledComponents'

interface TextAreaFieldProps {
   value: string
   onChangeField: (value: string) => void
   placeholderText?: string
   label?: string
}

@observer
class TextAreaField extends Component<TextAreaFieldProps> {
   onChangeField = value => {
      const { onChangeField } = this.props
      onChangeField(value)
   }
   render() {
      const { value, placeholderText, label } = this.props
      return (
         <TextAreaWithLabel>
            <Label>{label}</Label>
            <TextAreaFieldStyle
               onChange={e => this.onChangeField(e.target.value)}
               rows={3}
               placeholder={placeholderText}
               css={'width:300px'}
               value={value}
            >
               {value}
            </TextAreaFieldStyle>
         </TextAreaWithLabel>
      )
   }
}

export default TextAreaField
