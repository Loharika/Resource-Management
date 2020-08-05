import React, { Component } from 'react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { action } from 'mobx'
import { SortData, FilterData } from '../../constants/DropDownConstants'
import {
   SortAndFilter,
   SearchFieldCss,
   UsersListStyle,
   Header
} from './styledComponents'

import Sort from '../../../Common/Icons/Sort'
import Filter from '../../../Common/Icons/Filter'
import SearchField from '../Common/SearchField'
import Pagination from '../Common/Pagination'
import { UserListHeaders } from '../../constants/TableHeaders'
import DropDownComponent from '../Common/DropDownComponent'
import { PaginationCss } from '../ResourcesList/styledComponents'
import { Table } from 'semantic-ui-react'
import { TableStyle } from '../RequestsList/styledComponents'
import SortByOrder from '../Common/SortByOrder'

interface UsersListProps {
   usersListInstance: any
}
@observer
class UsersList extends Component<UsersListProps> {
   @action.bound
   onChangePageNumber(pageNumber) {
      const {
         usersListInstance: { onChangePageNumber }
      } = this.props
      onChangePageNumber(pageNumber)
   }

   @action.bound
   onClickAscending() {
      const {
         usersListInstance: { onChangeSortBy }
      } = this.props
      onChangeSortBy('ASCENDING')
   }
   @action.bound
   onClickDescending() {
      const {
         usersListInstance: { onChangeSortBy }
      } = this.props
      onChangeSortBy('DESCENDING')
   }
   @action.bound
   renderSortFilter() {
      const {
         usersListInstance: { onChangeSort, onChangeFilter, getApiStatus }
      } = this.props

      return (
         <SortAndFilter>
            <DropDownComponent
               onChange={onChangeSort}
               data={SortData}
               disabled={getApiStatus !== 200}
               icon={<Sort />}
            />
            <DropDownComponent
               onChange={onChangeFilter}
               data={FilterData}
               disabled={getApiStatus !== 200}
               icon={<Filter />}
            />
         </SortAndFilter>
      )
   }
   @action.bound
   renderPagination() {
      const {
         usersListInstance: { totalNumberOfPages, pageNumber }
      } = this.props
      return totalNumberOfPages > 0 ? (
         <Pagination
            onChangePageNumber={this.onChangePageNumber}
            totalPages={totalNumberOfPages}
            pageNumber={pageNumber}
            css={PaginationCss}
         />
      ) : (
         ''
      )
   }
   @action.bound
   renderUsersList() {
      const {
         usersListInstance: {
            results,
            pageNumber,
            getApiStatus,
            getApiError,
            getData
         }
      } = this.props

      return (
         <TableStyle>
            <Table textAlign={'center'}>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell textAlign={'center'}>
                        NAME
                     </Table.HeaderCell>
                     <Table.HeaderCell textAlign={'center'}>
                        <SortByOrder
                           label={'DEPARTMENT'}
                           onClickAscending={this.onClickAscending}
                           onClickDescending={this.onClickDescending}
                        />
                     </Table.HeaderCell>
                     <Table.HeaderCell textAlign={'center'}>
                        <SortByOrder label={'JOB ROLE'} />
                     </Table.HeaderCell>
                  </Table.Row>
               </Table.Header>

               <LoadingWrapperWithFailure
                  apiStatus={getApiStatus}
                  renderSuccessUI={this.renderTableBody}
                  onRetryClick={getData}
                  apiError={getApiError}
               />
            </Table>
         </TableStyle>
      )
   }

   renderHeaderUI = () => {
      const {
         usersListInstance: {
            getApiStatus,
            searchInput,
            onChangeSearchInput,
            pageNumber
         }
      } = this.props

      return (
         <Header>
            <SearchField
               isDisabled={getApiStatus !== 200}
               value={searchInput}
               onChangeField={onChangeSearchInput}
               css={SearchFieldCss}
            />
            {this.renderSortFilter()}
         </Header>
      )
   }
   renderTableBody = () => {
      const {
         usersListInstance: { results, pageNumber }
      } = this.props
      return (
         <Table.Body textAlign={'center'}>
            {results.get(pageNumber).map(option => (
               <Table.Row key={option['userId'] + '099'}>
                  <Table.Cell>{option.name}</Table.Cell>
                  <Table.Cell>{option.department}</Table.Cell>
                  <Table.Cell>{option.jobRole}</Table.Cell>
               </Table.Row>
            ))}
         </Table.Body>
      )
   }
   renderSuccessUI = () => {
      return <React.Fragment>{this.renderUsersList()}</React.Fragment>
   }

   render() {
      const {
         usersListInstance: { getApiStatus, getApiError, getData }
      } = this.props

      return (
         <UsersListStyle>
            {this.renderHeaderUI()}
            {this.renderSuccessUI()}
            {/* <LoadingWrapperWithFailure
               apiStatus={getApiStatus}
               renderSuccessUI={this.renderSuccessUI}
               onRetryClick={getData}
               apiError={getApiError}
            /> */}
            {this.renderPagination()}
         </UsersListStyle>
      )
   }
}

export default UsersList
