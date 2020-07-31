import React, { Component } from 'react'

import InputField from '../Common/InputField'
import SearchField from '../Common/SearchField'
import TextAreaField from '../Common/TextAreaField'
import ImageUpload from '../Common/ImageUpload'
import Checkbox from '../Common/CheckBox'
import DropDownComponent from '../Common/DropDownComponent/DropDownComponent'
import DateTime from '../Common/DateTime'
import { SortOptions, FilterOptions } from '../../constants/DropDownConstants'
import Filter from '../../../Common/Icons/Filter'
import DisplayTable from '../Common/Table'
import { ResourceItemsHeaders } from '../../constants/TableHeaders'
import ModalClose from '../Common/Modal'
import Pagination from '../Common/Pagination'
import { action } from 'mobx'
class RequestsList extends Component {
   @action.bound
   renderChild() {
      return (
         <SearchField
            value={'harika'}
            onChangeField={() => {}}
            placeholderText={'Search'}
         />
      )
   }
   render() {
      return (
         <React.Fragment>
            <div>RequestsList</div>

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

            <Checkbox
               onClickCheckBox={(isChecked: boolean) => {}}
               isChecked={true}
            />
            <DropDownComponent
               data={{
                  listTitle: 'Sort',
                  placeholder: 'Sort',
                  listItems: SortOptions
               }}
               onChange={value => {}}
               icon={<Filter />}
            />
            <DateTime onChangeTime={() => {}} label={'DATE AND TIME'} />
            {/* <DisplayTable headers={ResourceItemsHeaders} /> */}
            <ModalClose />
            <Pagination
               onChangePageNumber={(pageNumber: number) => {}}
               totalPages={10}
               pageNumber={1}
            />
         </React.Fragment>
      )
   }
}

export default RequestsList
