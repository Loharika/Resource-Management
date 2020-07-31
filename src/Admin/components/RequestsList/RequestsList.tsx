import React, { Component } from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { RequestsTableHeader } from '../../constants/TableHeaders'
import { SortOptions, FilterOptions } from '../../constants/DropDownConstants'
import SearchField from '../Common/SearchField'
import Pagination from '../Common/Pagination'
import DropDownComponent from '../Common/DropDownComponent'

import { PaginationCss } from '../ResourcesList/styledComponents'
import {
   TableStyle,
   RequestsListStyle,
   SearchFieldCss,
   SortAndFilter,
   Header
} from './styledComponents'
interface RequestsListProps {
   requestsListInstance: any
}
@observer
class RequestsList extends Component<RequestsListProps> {
   onClickCheckbox = requestId => {}

   renderPagination = () => {
      const {
         requestsListInstance: {
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

   renderRequestsList = () => {
      const {
         requestsListInstance: { results, pageNumber }
      } = this.props
      return (
         <TableStyle>
            <Table>
               <Table.Header>
                  <Table.Row>
                     {RequestsTableHeader.map(option => {
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
                        <Table.Cell>{option.personName}</Table.Cell>
                        <Table.Cell>{option.resource}</Table.Cell>
                        <Table.Cell>{option.item}</Table.Cell>
                        <Table.Cell>{option.accessLevel}</Table.Cell>
                        <Table.Cell>{option.dueDateTime}</Table.Cell>
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </TableStyle>
      )
   }
   render() {
      const {
         requestsListInstance: {
            results,
            pageNumber,
            getApiStatus,
            searchInput,
            onChangeSearchField,
            onChangeSort,
            onChangeFilter,
            getApiError,
            getData
         }
      } = this.props
      const SortData = {
         listTitle: 'Sort',
         listItems: SortOptions,
         placeholder: 'SORT'
      }
      const FilterData = {
         listTitle: 'Filter',
         listItems: FilterOptions,
         placeholder: 'FILTER'
      }
      return (
         <RequestsListStyle>
            <Header>
               <SearchField
                  isDisabled={getApiStatus !== 200}
                  value={searchInput}
                  onChangeField={onChangeSearchField}
                  css={SearchFieldCss}
               />
               <SortAndFilter>
                  <DropDownComponent onChange={onChangeSort} data={SortData} />
                  <DropDownComponent
                     onChange={onChangeFilter}
                     data={FilterData}
                  />
               </SortAndFilter>
            </Header>
            <LoadingWrapperWithFailure
               apiStatus={getApiStatus}
               renderSuccessUI={this.renderRequestsList}
               onRetryClick={getData}
               apiError={getApiError}
            />
            {this.renderPagination()}
         </RequestsListStyle>
      )
   }
}

export default RequestsList
