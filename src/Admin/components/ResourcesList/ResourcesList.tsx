import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'

import LoadingWrapperWithFailure from '../../../Common/components/common/LoadingWrapperWithFailure'
import ResourceCard from '../ResourceCard'
import Pagination from '../Common/Pagination'
import SearchField from '../Common/SearchField'
import {
   ResourceListStyle,
   SearchFieldCss,
   ResourceListCards,
   PaginationCss
} from './styledComponents'
interface ResourcesListProps {
   resourcesListInstance: any
   onClickResourceCard: (resourceId: number) => void
}

@observer
class ResourcesList extends Component<ResourcesListProps> {
   componentDidMount() {
      window.localStorage.clear()
   }
   @action.bound
   onChangeSearchField = searchInput => {
      const {
         resourcesListInstance: { onChangeSearchInput }
      } = this.props
      onChangeSearchInput(searchInput)
   }
   renderResourceCards = () => {
      const {
         resourcesListInstance: { results, pageNumber },
         onClickResourceCard
      } = this.props

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
         resourcesListInstance: {
            getApiStatus,
            getApiError,
            getData,
            searchInput
         }
      } = this.props

      const { renderResourceCards } = this
      return (
         <ResourceListStyle>
            <SearchField
               isDisabled={getApiStatus !== 200}
               value={searchInput}
               onChangeField={this.onChangeSearchField}
               css={SearchFieldCss}
            />
            <LoadingWrapperWithFailure
               apiStatus={getApiStatus}
               renderSuccessUI={renderResourceCards}
               onRetryClick={getData}
               apiError={getApiError}
            />
            {this.renderPagination()}
         </ResourceListStyle>
      )
   }
}

export default ResourcesList
