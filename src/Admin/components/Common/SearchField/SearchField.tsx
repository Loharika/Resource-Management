import React, { Component } from 'react'
import { SearchFieldStyle, InputFieldStyle } from './styledComponents'
import SearchIcon from '../../../../Common/Icons/SearchIcon'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

interface SearchFieldProps {
   value: string
   onChangeField: (value: string) => void
   placeholderText?: string
   css?: any
   isDisabled?: boolean
}
@observer
class SearchField extends Component<SearchFieldProps> {
   @observable searchInput
   constructor(props) {
      super(props)
      const { value } = this.props
      this.searchInput = value
   }
   onChangeField = event => {
      this.searchInput = event.target.value
   }
   onKeyDown = event => {
      if (event.keyCode === 13) {
         this.searchInput = event.target.value
         const { onChangeField } = this.props
         onChangeField(this.searchInput)
         this.searchInput = ''
      }
   }
   render() {
      const { placeholderText, css, isDisabled } = this.props
      console.log(isDisabled)
      return (
         <SearchFieldStyle css={css} isDisabled={isDisabled}>
            <SearchIcon />
            <InputFieldStyle
               defaultValue={this.searchInput}
               onChange={this.onChangeField}
               placeholder={placeholderText}
               onKeyDown={this.onKeyDown}
            />
         </SearchFieldStyle>
      )
   }
}

export default SearchField
