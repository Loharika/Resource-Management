import React, { Component } from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import { RequestsTableHeader } from '../../constants/TableHeaders'
import {
   SortOptions,
   FilterOptions,
   AccessLevelData
} from '../../constants/DropDownConstants'
import SearchField from '../Common/SearchField'
import Pagination from '../Common/Pagination'
import DropDownComponent from '../Common/DropDownComponent'
import {
   Button as AcceptButton,
   Button as RejectButton
} from '../../../Common/components/Button'
import { PaginationCss } from '../ResourcesList/styledComponents'
import {
   TableStyle,
   RequestsListStyle,
   SearchFieldCss,
   SortAndFilter,
   Header,
   Buttons,
   AcceptButtonCss,
   RejectButtonCss
} from './styledComponents'
import { action, observable, computed } from 'mobx'

interface RequestsListProps {
   requestsListInstance: any

   onClickAcceptButton: (acceptedRequests) => void
   onClickRejectButton: (rejectedRequests) => void
}
@observer
class RequestsList extends Component<RequestsListProps> {
   @observable selectedRequests: any
   constructor(props) {
      super(props)
      this.selectedRequests = []
   }
   onClickCheckbox = requestId => {
      if (this.selectedRequests.includes(requestId)) {
         this.selectedRequests = this.selectedRequests.filter(
            itemId => itemId !== requestId
         )
      } else {
         this.selectedRequests = [...this.selectedRequests, requestId]
      }
   }
   @computed
   get totalNumberOfSelectedRequests() {
      return this.selectedRequests.length
   }
   @action.bound
   onChangePageNumber(pageNumber) {
      const {
         requestsListInstance: { onChangePageNumber }
      } = this.props
      this.selectedRequests = []
      onChangePageNumber(pageNumber)
   }
   @action.bound
   onSelectRequest = requestId => {}
   onClickAcceptButton = () => {
      const { onClickAcceptButton } = this.props
      onClickAcceptButton(this.selectedRequests)
   }
   onClickRejectButton = () => {
      const { onClickRejectButton } = this.props
      onClickRejectButton(this.selectedRequests)
   }
   @action.bound
   renderButtons() {
      const {
         requestsListInstance: { getApiStatus }
      } = this.props
      return (
         <Buttons>
            <AcceptButton
               text={'ACCEPT'}
               onClick={this.onClickAcceptButton}
               buttonType={'rectangular'}
               buttonVariant={'outline'}
               css={AcceptButtonCss}
               disabled={getApiStatus !== 200}
            />
            <RejectButton
               text={'REJECT'}
               onClick={this.onClickRejectButton}
               buttonType={'rectangular'}
               buttonVariant={'outline'}
               css={RejectButtonCss}
               disabled={getApiStatus !== 200}
            />
         </Buttons>
      )
   }
   @action.bound
   renderSortFilter() {
      const {
         requestsListInstance: { onChangeSort, onChangeFilter, getApiStatus }
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
         <SortAndFilter>
            <DropDownComponent
               onChange={onChangeSort}
               data={SortData}
               disabled={getApiStatus !== 200}
            />
            <DropDownComponent
               onChange={onChangeFilter}
               data={FilterData}
               disabled={getApiStatus !== 200}
            />
         </SortAndFilter>
      )
   }
   @action.bound
   renderPagination() {
      const {
         requestsListInstance: { totalNumberOfPages, pageNumber }
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
   renderRequestsList() {
      const {
         requestsListInstance: { results, pageNumber, getApiStatus }
      } = this.props

      return (
         <TableStyle>
            <Table>
               <Table.Header>
                  <Table.Row>
                     {RequestsTableHeader.map(option => {
                        return (
                           <Table.HeaderCell key={option}>
                              {option}
                           </Table.HeaderCell>
                        )
                     })}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {results.get(pageNumber).map(option => (
                     <Table.Row key={option['requestId'] + '0999'}>
                        <Table.Cell>
                           <Checkbox
                              onClick={() =>
                                 this.onClickCheckbox(option['requestId'])
                              }
                           />
                        </Table.Cell>
                        <Table.Cell>{option.personName}</Table.Cell>
                        <Table.Cell>{option.resource}</Table.Cell>
                        <Table.Cell>{option.item}</Table.Cell>
                        <Table.Cell>
                           <DropDownComponent
                              data={AccessLevelData}
                              onChange={option.updateAccessLevel}
                              disabled={true}
                           />
                        </Table.Cell>
                        <Table.Cell>{option.dueDateTime}</Table.Cell>
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </TableStyle>
      )
   }

   renderHeaderUI = () => {
      const {
         requestsListInstance: {
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
            {this.totalNumberOfSelectedRequests > 0
               ? this.renderButtons()
               : this.renderSortFilter()}
         </Header>
      )
   }
   render() {
      const {
         requestsListInstance: {
            getApiStatus,
            getApiError,
            getData,
            pageNumber
         }
      } = this.props

      return (
         <RequestsListStyle>
            {this.renderHeaderUI()}
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

// [
//    {
//    request_id: 1234,
//       access_level:'READ'
// },

// ]
