import React, { Component } from 'react'

import ReactPaginate from 'react-paginate'
import { observer } from 'mobx-react'
import './file.css'
import { MdChevronLeft, MdChevronRight, MdAccountCircle } from 'react-icons/md'
import { PaginationStyle } from './styledComponents'

interface PaginationProps {
   totalPages: number
   pageNumber: number
   onChangePageNumber: (pageNumber: number) => void
   css?: any
}
@observer
class Pagination extends Component<PaginationProps> {
   handlePageClick = value => {
      const { onChangePageNumber, pageNumber } = this.props
      onChangePageNumber(value.selected + 1)
   }
   render() {
      const { totalPages, pageNumber, css } = this.props
      return (
         <PaginationStyle css={css}>
            <ReactPaginate
               previousLabel={<MdChevronLeft />}
               nextLabel={<MdChevronRight />}
               breakLabel={'. . . .'}
               breakClassName={'break-me'}
               pageCount={totalPages}
               marginPagesDisplayed={2}
               pageRangeDisplayed={3}
               onPageChange={this.handlePageClick}
               containerClassName={'pagination'}
               subContainerClassName={'pages pagination'}
               activeClassName={'active'}
               activePage={pageNumber}
               pageLinkClassName={'page-number'}
            />
         </PaginationStyle>
      )
   }
}

export default Pagination
