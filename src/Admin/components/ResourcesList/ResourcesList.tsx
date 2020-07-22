import React, { Component } from 'react'

import InputField from '../Common/InputField'
import SearchField from '../Common/SearchField'
import TextAreaField from '../Common/TextAreaField'
import ImageUpload from '../Common/ImageUpload'
class ResourcesList extends Component {
   render() {
      return (
         <React.Fragment>
            <div>ResourcesList</div>
            <InputField
               value={'harika'}
               onChangeField={(_value): void => {}}
               label={'NAME'}
            />
            <SearchField
               value={'harika'}
               onChangeField={() => {}}
               placeholderText={'Search'}
            />
            <TextAreaField
               value={''}
               onChangeField={() => {}}
               placeholderText={'Description'}
            />
            <ImageUpload />
         </React.Fragment>
      )
   }
}

export default ResourcesList
