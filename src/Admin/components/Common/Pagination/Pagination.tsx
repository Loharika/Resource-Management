import React, { Component } from 'react'

import ReactPaginate from 'react-paginate'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import './file.css'
import { MdChevronLeft, MdChevronRight, MdAccountCircle } from 'react-icons/md'

interface PaginationProps {
   totalPages: number
   onChangePageNumber: (pageNumber: number) => void
}
@observer
class Pagination extends Component<PaginationProps> {
   @observable pageCount: number
   constructor(props) {
      super(props)
      this.pageCount = 10
   }
   handlePageClick = value => {
      console.log(value.selected)
      const { onChangePageNumber } = this.props
      onChangePageNumber(value.selected)
   }
   render() {
      const { totalPages } = this.props
      return (
         <ReactPaginate
            previousLabel={<MdChevronLeft />}
            nextLabel={<MdChevronRight />}
            breakLabel={'. . . .'}
            breakClassName={'break-me'}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
         />
      )
   }
}

export default Pagination
