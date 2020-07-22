import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { TextAreaFieldStyle } from './styledComponents'

interface TextAreaFieldProps {
   value: string
   onChangeField: (value: string) => void
   placeholderText?: string
}

@observer
class TextAreaField extends Component<TextAreaFieldProps> {
   onChangeField = value => {
      const { onChangeField } = this.props
      onChangeField(value)
   }
   render() {
      const { value, placeholderText } = this.props
      return (
         <TextAreaFieldStyle
            onChange={e => this.onChangeField(e.target.value)}
            rows={3}
            cols={50}
            placeholder={placeholderText}
            css={'width:300px'}
            value={value}
         >
            {value}
         </TextAreaFieldStyle>
      )
   }
}

export default TextAreaField
