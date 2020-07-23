import React, { Component } from 'react'

import ReactPaginate from 'react-paginate'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
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
               pageLinkClassName={
                  'p-10 border border-solid border-red text-red-900'
               }
            />
         </PaginationStyle>
      )
   }
}

export default Pagination
