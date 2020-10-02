import React, { Component } from 'react'
import { Table, Checkbox, Loader, Dimmer } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import {observable,action,computed} from 'mobx'
import { Button, Icon, Modal } from 'semantic-ui-react'
import SearchField from '../Common/SearchField'
import Filter from '../../../Common/Icons/Filter'
import Sort from '../../../Common/Icons/Sort'
import Pagination from '../Common/Pagination'
import DropDownComponent from '../Common/DropDownComponent'
import {
   Button as AcceptButton,
   Button as RejectButton
} from '../../../Common/components/Button'
import {
   SortOptions,
   FilterOptions,
   AccessLevelData
} from '../../constants/DropDownConstants'
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
interface UserAccessableResourcesListProps {
   requestsListInstance?: any
   onClickAcceptButton: (acceptedRequests) => void
   onClickRejectButton: (rejectedRequests, reason) => void
}
@observer
class UserAccessableResourcesList extends Component<UserAccessableResourcesListProps> {
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
   
   @computed
   get totalNumberOfSelectedRequests() {
      return this.selectedRequests.length
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
      return <div>{this.renderHeaderUI()}</div>
   }
}

export default UserAccessableResourcesList
