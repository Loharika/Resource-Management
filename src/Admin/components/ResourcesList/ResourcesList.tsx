import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'

import ResourceCard from '../ResourceCard'
import {
   ResourceListStyle,
   SearchFieldCss,
   ResourceListCards,
   PaginationCss
} from './styledComponents'
import Pagination from '../Common/Pagination'
import SearchField from '../Common/SearchField'

interface ResourcesListProps {
   resourcesListInstance: any
   onClickResourceCard: (resourceId: number) => void
}

@observer
class ResourcesList extends Component<ResourcesListProps> {
   @observable searchInput
   constructor(props) {
      super(props)
      this.searchInput = ''
   }
   @action.bound
   onChangeSearchField = searchInput => {
      this.searchInput = searchInput
      console.log(searchInput)
   }
   renderResourceCards = () => {
      const {
         resourcesListInstance: { results, pageNumber },
         onClickResourceCard
      } = this.props
      console.log(results.get(pageNumber))
      return (
         <ResourceListCards>
            {results.get(pageNumber).map(resource => {
               return (
                  <ResourceCard
                     resourceDetails={resource}
                     key={resource.resourceId}
                     onClickResourceCard={onClickResourceCard}
                  />
               )
            })}
         </ResourceListCards>
      )
   }
   @action.bound
   renderPagination() {
      const {
         resourcesListInstance: {
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
         resourcesListInstance: { getApiStatus, getApiError, getListOfItems }
      } = this.props
      const { renderResourceCards } = this
      return (
         <ResourceListStyle>
            <SearchField
               isDisabled={getApiStatus !== 200}
               value={this.searchInput}
               onChangeField={this.onChangeSearchField}
               css={SearchFieldCss}
            />
            <LoadingWrapperWithFailure
               apiStatus={getApiStatus}
               renderSuccessUI={renderResourceCards}
               onRetryClick={getListOfItems}
               apiError={getApiError}
            />
            {this.renderPagination()}
         </ResourceListStyle>
      )
   }
}

export default ResourcesList
