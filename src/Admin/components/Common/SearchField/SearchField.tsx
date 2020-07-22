import React, { Component } from 'react'
import { SearchFieldStyle, InputFieldStyle } from './styledComponents'
import SearchIcon from '../../../../Common/Icons/SearchIcon'
import { observer } from 'mobx-react'

interface SearchFieldProps {
   value: string
   onChangeField: (value: string) => void
   placeholderText?: string
}
@observer
class SearchField extends Component<SearchFieldProps> {
   render() {
      const { value, onChangeField, placeholderText } = this.props
      return (
         <SearchFieldStyle css={'width:350px'}>
            <SearchIcon />
            <InputFieldStyle
               defaultValue={value}
               onChange={e => onChangeField(e.target.value)}
               placeholder={placeholderText}
            />
         </SearchFieldStyle>
      )
   }
}

export default SearchField
