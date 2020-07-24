import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
   TextAreaFieldStyle,
   TextAreaWithLabel,
   Label,
   ErrorMessage
} from './styledComponents'

interface TextAreaFieldProps {
   value: string
   onChangeField: (value: string) => void
   placeholderText?: string
   label?: string
   displayError?: boolean
}

@observer
class TextAreaField extends Component<TextAreaFieldProps> {
   renderErrorMessage = () => {
      const { displayError, value } = this.props
      if (displayError && value.length === 0) {
         return <ErrorMessage>Required</ErrorMessage>
      } else {
         return <ErrorMessage> &nbsp;</ErrorMessage>
      }
   }
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
               placeholder={placeholderText}
               value={value}
            >
               {value}
            </TextAreaFieldStyle>
            {this.renderErrorMessage()}
         </TextAreaWithLabel>
      )
   }
}

export default TextAreaField
