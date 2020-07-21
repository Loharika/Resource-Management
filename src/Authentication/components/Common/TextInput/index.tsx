import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { MdErrorOutline } from 'react-icons/md'
import { Label } from '../../../styleGuides/StyleGuides'
import {
   ErrorStyle,
   ErrorSymbol,
   InputFiledWithError,
   InputTag,
   InputFieldWithLabel,
   Star
} from '../../../styledComponents/styledComponents'

interface TextInputProps {
   inputText: string
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
   placeholderText: string
   validate: (
      userInput: string
   ) => { showErrorMessage: boolean; errorMessage: string }
   displayError: boolean
   type: string
   label: string
}
@observer
class TextInput extends React.Component<TextInputProps> {
   @observable userNameValidation!: {
      showErrorMessage: boolean
      errorMessage: string
   }
   inputField: any
   constructor(props) {
      super(props)
      this.userNameValidation = { showErrorMessage: false, errorMessage: '' }
      this.inputField = React.createRef()
   }
   setFocus = () => {
      this.inputField.current.focus()
   }
   onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { onChange } = this.props
      onChange(event)
      this.userNameValidation = this.props.validate(event.target.value)
   }
   onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.userNameValidation = this.props.validate(e.target.value)
   }
   displayError = () => {
      const { showErrorMessage, errorMessage } = this.userNameValidation
      const { displayError } = this.props
      return showErrorMessage && displayError ? (
         <ErrorStyle isError={showErrorMessage}>{errorMessage}</ErrorStyle>
      ) : (
         ''
      )
   }
   render() {
      const {
         inputText,
         placeholderText,
         label,
         type,
         displayError
      } = this.props
      return (
         <React.Fragment>
            <Label htmlFor={label}>
               {label}
               <Star>*</Star>
            </Label>
            <InputFiledWithError>
               <InputTag
                  id={label}
                  value={inputText}
                  isError={
                     inputText.length === 0 && displayError ? true : false
                  }
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  type={type}
                  placeholder={placeholderText}
                  ref={this.inputField}
               />
               <ErrorSymbol
                  value={inputText}
                  isError={
                     inputText.length === 0 && displayError ? true : false
                  }
               >
                  <MdErrorOutline />
               </ErrorSymbol>
            </InputFiledWithError>
            {this.displayError()}
         </React.Fragment>
      )
   }
}
export default TextInput
