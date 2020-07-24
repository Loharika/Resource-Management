import React, { Component } from 'react'
import {
   InputFieldStyle,
   InputFieldWithLabel,
   Label,
   ErrorMessage
} from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
interface InputFieldProps {
   value: string
   onChangeField: (value: string) => any
   label?: string
   cssStyles?: string
   placeholderText?: string
   displayError?: boolean
}

@observer
class InputField extends Component<InputFieldProps> {
   onChangeField = inputText => {
      const { onChangeField } = this.props
      onChangeField(inputText)
   }
   renderErrorMessage = () => {
      const { displayError, value } = this.props
      if (displayError && value.length === 0) {
         return <ErrorMessage>Required</ErrorMessage>
      } else {
         return <ErrorMessage> &nbsp;</ErrorMessage>
      }
   }
   render() {
      const { value, label, placeholderText } = this.props
      return (
         <InputFieldWithLabel>
            <Label>{label}</Label>
            <InputFieldStyle
               type='text'
               defaultValue={value}
               onChange={event => this.onChangeField(event.target.value)}
               placeholder={placeholderText}
            />
            {this.renderErrorMessage()}
         </InputFieldWithLabel>
      )
   }
}

export default InputField
