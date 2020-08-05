import React, { Component } from 'react'

import {
   SortByOrderStyle,
   Label,
   Arrows,
   ArrowButton
} from './styledComponents'
import DownArrow from '../../../../Common/Icons/DownArrow'
import UpArrow from '../../../../Common/Icons/UpArrow'
import { observer } from 'mobx-react'

interface SortByOrderProps {
   label?: string
   onClickAscending?: () => void
   onClickDescending?: () => void
}
@observer
class SortByOrder extends Component<SortByOrderProps> {
   render() {
      const { label, onClickDescending, onClickAscending } = this.props
      return (
         <SortByOrderStyle>
            <Label>{label} &nbsp;</Label>
            <Arrows>
               <ArrowButton onClick={onClickAscending}>
                  <UpArrow />
               </ArrowButton>

               <ArrowButton onClick={onClickDescending}>
                  <DownArrow />
               </ArrowButton>
            </Arrows>
         </SortByOrderStyle>
      )
   }
}

export default SortByOrder
