import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { Table, Checkbox } from 'semantic-ui-react'

import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'

import { ResourceItemsHeaders } from '../../constants/TableHeaders'
import { SortOptions } from '../../constants/DropDownConstants'

import {
   PaginationCss
} from '../ResourcesList/styledComponents'

import SearchField from '../Common/SearchField'
import Pagination from '../Common/Pagination'
import DropDownComponent from '../Common/DropDownComponent'

import {
   TableStyle,
   Header,
   Title,
   SearchSortFields,
   ResourceItemsStyle,
   SearchFieldStyle,
   SearchFieldCss
} from './styledComponents'
interface ResourceItemsListProps {
   resourceItemsDetails: any
   doNetWorkCallForResourceItems: () => void
}
@observer
class ResourceItemsList extends Component<ResourceItemsListProps> {
   @observable searchInput!: string
   constructor(props) {
      super(props)
      this.searchInput = ''
   }
   onClickCheckbox(resourceItemId) {
      alert(resourceItemId)
   }
   onChangeSearchField(searchInput) {
      this.searchInput = searchInput
   }
   onChangeDropdown = value => {
      alert(value)
   }
   renderResourceDetails = () => {
      const {
         resourceItemsDetails: { results, pageNumber }
      } = this.props

      const keys = ['resourceItemTitle', 'resourceItemLink', 'description']

      return (
         <TableStyle>
            <Table>
               <Table.Header>
                  <Table.Row>
                     {ResourceItemsHeaders.map(option => {
                        return (
                           <Table.HeaderCell key={Math.random()}>
                              {option}
                           </Table.HeaderCell>
                        )
                     })}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {results.get(pageNumber).map(option => (
                     <Table.Row key={Math.random()}>
                        <Table.Cell>
                           <Checkbox
                              onClick={() =>
                                 this.onClickCheckbox(option['resourceItemId'])
                              }
                           />
                        </Table.Cell>
                        {keys.map((key, index) => {
                           return (
                              <Table.Cell key={option[keys[0]] + Math.random()}>
                                 {option[keys[index]]}
                              </Table.Cell>
                           )
                        })}
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </TableStyle>
      )
   }
   renderPagination = () => {
      const {
         resourceItemsDetails: {
            onChangePageNumber,
            totalNumberOfPages,
            pageNumber
         }
      } = this.props
      return totalNumberOfPages > 0 ? (
         <Pagination
            onChangePageNumber={onChangePageNumber}
            totalPages={totalNumberOfPages}
            pageNumber={pageNumber}
            css={PaginationCss}
         />
      ) : (
         ''
      )
   }
   render() {
      const {
         resourceItemsDetails: { getApiStatus, getApiError, pageNumber },
         doNetWorkCallForResourceItems
      } = this.props
      const dropdownData = {
         listTitle: 'Sort',
         placeholder: 'SORT',
         listItems: SortOptions
      }
      return (
         <ResourceItemsStyle>
            <Header>
               <Title>Items</Title>
               <SearchSortFields>
                  <SearchFieldStyle>
                     <SearchField
                        isDisabled={getApiStatus !== 200}
                        value={this.searchInput}
                        onChangeField={this.onChangeSearchField}
                        css={SearchFieldCss}
                        placeholderText={'Search Title'}
                     />
                  </SearchFieldStyle>
                  <DropDownComponent
                     data={dropdownData}
                     onChange={this.onChangeDropdown}
                  />
               </SearchSortFields>
            </Header>
            <LoadingWrapperWithFailure
               apiStatus={getApiStatus}
               apiError={getApiError}
               renderSuccessUI={this.renderResourceDetails}
               onRetryClick={doNetWorkCallForResourceItems}
            />
            {this.renderPagination()}
         </ResourceItemsStyle>
      )
   }
}

export default ResourceItemsList
