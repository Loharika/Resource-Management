import React, { Component } from 'react'
import { Table, Checkbox, Loader, Dimmer } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import Filter from '../../../Common/Icons/Filter'
import Sort from '../../../Common/Icons/Sort'
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
   RejectButtonCss,
   Reason,
   Label
} from './styledComponents'
import { action, observable, computed } from 'mobx'

interface RequestsListProps {
   requestsListInstance: any

   onClickAcceptButton: (acceptedRequests) => void
   onClickRejectButton: (rejectedRequests, reason) => void
}
@observer
class RequestsList extends Component<RequestsListProps> {
   @observable selectedRequests: any
   @observable displayAcceptModal: boolean
   @observable displayRejectModal: boolean
   @observable reason: string
   @observable displayLoader: boolean
   constructor(props) {
      super(props)
      this.selectedRequests = []
      this.displayAcceptModal = false
      this.displayRejectModal = false
      this.reason = 'Are you sure you want to delete your account'
      this.displayLoader = false
   }
   onSelectRequest = requestId => {
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
   onClickAcceptModal(value, isAccepted) {
      this.displayAcceptModal = value
      this.displayLoader = false
      if (isAccepted) {
         const { onClickAcceptButton } = this.props
         onClickAcceptButton(this.selectedRequests)
         this.displayLoader = true
      }
   }
   @action.bound
   onClickRejectModal(value, isRejected) {
      this.displayRejectModal = value
      this.displayLoader = false
      if (isRejected) {
         const { onClickRejectButton } = this.props
         onClickRejectButton(this.selectedRequests, this.reason)
         this.displayLoader = true
      }
   }
   @action.bound
   onChangeReason(event) {
      this.reason = event.target.value
   }

   renderAcceptmodal = () => {
      const { displayAcceptModal } = this
      return (
         <Modal
            size={'mini'}
            open={displayAcceptModal}
            onClose={() => this.onClickAcceptModal(false, false)}
         >
            <Modal.Header>Do you want to Accept?</Modal.Header>

            <Modal.Actions>
               <Button onClick={() => this.onClickAcceptModal(false, false)}>
                  Cancel
               </Button>
               <Button
                  color='blue'
                  onClick={() => this.onClickAcceptModal(false, true)}
               >
                  OK
               </Button>
            </Modal.Actions>
         </Modal>
      )
   }
   renderRejectModal = () => {
      const { displayRejectModal } = this
      return (
         <Modal
            size={'mini'}
            open={displayRejectModal}
            onClose={() => this.onClickRejectModal(false, false)}
         >
            <Modal.Header>Do you want to Reject?</Modal.Header>
            <Modal.Content>
               <Label>REASON FOR REJECTION</Label>
               <Reason
                  defaultValue={this.reason}
                  onChange={this.onChangeReason}
               />
            </Modal.Content>
            <Modal.Actions>
               <Button onClick={() => this.onClickRejectModal(false, false)}>
                  CANCEL
               </Button>
               <Button
                  color='red'
                  onClick={() => this.onClickRejectModal(false, true)}
               >
                  REJECT
               </Button>
            </Modal.Actions>
         </Modal>
      )
   }
   renderButtons = () => {
      const {
         requestsListInstance: { getApiStatus }
      } = this.props

      return (
         <Buttons>
            <AcceptButton
               text={'ACCEPT'}
               onClick={() => this.onClickAcceptModal(true, false)}
               buttonType={'rectangular'}
               buttonVariant={'outline'}
               css={AcceptButtonCss}
               disabled={getApiStatus !== 200}
            />
            {this.renderAcceptmodal()}
            <RejectButton
               text={'REJECT'}
               onClick={() => this.onClickRejectModal(true, false)}
               buttonType={'rectangular'}
               buttonVariant={'outline'}
               css={RejectButtonCss}
               disabled={getApiStatus !== 200}
            />
            {this.renderRejectModal()}
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
                                 this.onSelectRequest(option['requestId'])
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
         requestsListInstance: { getApiStatus, getApiError, getData }
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
