import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { Table, Checkbox } from 'semantic-ui-react'

import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'

import { ResourceItemsHeaders } from '../../constants/TableHeaders'
import { SortOptions } from '../../constants/DropDownConstants'
import {
   Button as AddButton,
   Button as DeleteButton
} from '../../../Common/components/Button'
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
   SearchFieldCss,
   DropDownCss,
   AddButtonGreenCss,
   AddButtonGreyCss,
   DelButtonRedCss,
   DelButtonGreyCss,
   Footer,
   Buttons,
   PaginationCss
} from './styledComponents'
import SortIcon from '../../../Common/Icons/Sort'
interface ResourceItemsListProps {
   resourceItemsDetails: any
   doNetWorkCallForResourceItems: () => void
   onClickAddResourceItem: () => void
   onClickCheckBox: (resourceId) => void
   onClickDeleteResourceItems: () => void
   selectedResourceItemsCount: number
   onClickUpdateResourceItem: (resourceItemId: number) => void
}
@observer
class ResourceItemsList extends Component<ResourceItemsListProps> {
   constructor(props) {
      super(props)
   }
   @action.bound
   onClickCheckbox(resourceItemId) {
      const { onClickCheckBox } = this.props
      onClickCheckBox(resourceItemId)
   }
   @action.bound
   onChangeSearchField(searchInput) {
      const {
         resourceItemsDetails: { onChangeSearchInput }
      } = this.props
      onChangeSearchInput(searchInput)
   }
   @action.bound
   onChangeDropdown = value => {
      const {
         resourceItemsDetails: { onChangeSortBy }
      } = this.props
      onChangeSortBy(value)
   }
   @action.bound
   onClickResourceItem(resourceItemId) {
      const { onClickUpdateResourceItem } = this.props
      onClickUpdateResourceItem(resourceItemId)
   }
   renderResourceDetails = () => {
      const {
         resourceItemsDetails: { results, pageNumber }
      } = this.props
      const keys = ['resourceItemTitle', 'description', 'resourceItemLink']
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
                        <Table.Cell
                           onClick={() =>
                              this.onClickResourceItem(option['resourceItemId'])
                           }
                        >
                           {option.resourceItemTitle}
                        </Table.Cell>
                        <Table.Cell
                           onClick={() =>
                              this.onClickResourceItem(option['resourceItemId'])
                           }
                        >
                           {option.description}
                        </Table.Cell>
                        <Table.Cell
                           onClick={() =>
                              this.onClickResourceItem(option['resourceItemId'])
                           }
                        >
                           <a href={option.resourceItemLink}>
                              {option.resourceItemLink}
                           </a>
                        </Table.Cell>
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

   @action.bound
   renderFooterUI() {
      const {
         onClickAddResourceItem,
         onClickDeleteResourceItems,
         selectedResourceItemsCount: count
      } = this.props
      return (
         <Footer>
            <Buttons>
               <AddButton
                  disabled={count === 0 ? false : true}
                  text={'ADD ITEM'}
                  onClick={onClickAddResourceItem}
                  buttonType={'rectangular'}
                  buttonVariant={'filled'}
                  css={count === 0 ? AddButtonGreenCss : AddButtonGreyCss}
               />
               <DeleteButton
                  disabled={count !== 0 ? false : true}
                  text={'DELETE'}
                  onClick={onClickDeleteResourceItems}
                  buttonType={'rectangular'}
                  buttonVariant={'filled'}
                  css={count === 0 ? DelButtonGreyCss : DelButtonRedCss}
               />
            </Buttons>
            {this.renderPagination()}
         </Footer>
      )
   }
   render() {
      const {
         resourceItemsDetails: {
            getApiStatus,
            getApiError,
            pageNumber,
            searchInput
         },
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
                        value={searchInput}
                        onChangeField={this.onChangeSearchField}
                        css={SearchFieldCss}
                        placeholderText={'Search Title'}
                     />
                  </SearchFieldStyle>
                  <DropDownComponent
                     data={dropdownData}
                     onChange={this.onChangeDropdown}
                     icon={<SortIcon />}
                     css={DropDownCss}
                  />
               </SearchSortFields>
            </Header>
            <LoadingWrapperWithFailure
               apiStatus={getApiStatus}
               apiError={getApiError}
               renderSuccessUI={this.renderResourceDetails}
               onRetryClick={doNetWorkCallForResourceItems}
            />
            {this.renderFooterUI()}
         </ResourceItemsStyle>
      )
   }
}

export default ResourceItemsList
