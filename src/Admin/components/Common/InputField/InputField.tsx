import React, { Component } from 'react'
import { InputFieldStyle, InputFieldWithLabel, Label } from './styledComponents'
import { observer } from 'mobx-react'
interface InputFieldProps {
   value: string
   onChangeField: (value: string) => any
   label?: string
   cssStyles?: string
   placeholderText?: string
}

@observer
class InputField extends Component<InputFieldProps> {
   render() {
      const { value, onChangeField, label, placeholderText } = this.props
      return (
         <InputFieldWithLabel css={'width:250px'}>
            <Label>{label}</Label>
            <InputFieldStyle
               type='text'
               defaultValue={value}
               onChange={event => onChangeField(event.target.value)}
               placeholder={placeholderText}
            />
         </InputFieldWithLabel>
      )
   }
}

export default InputField
