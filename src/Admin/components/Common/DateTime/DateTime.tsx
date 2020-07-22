import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { RiCalendarLine } from 'react-icons/ri'

import {
   DateAndTimeStyle,
   DataAndTimeDisplay,
   Star,
   Icon,
   Label
} from './styledComponents'
type DateAndTimeProps = {
   startDate?: object
   onChangeTime: (date: any) => void
   displayError?: boolean
   label: string
}
@observer
class DateTime extends React.Component<DateAndTimeProps> {
   @observable isChanged: boolean
   @observable startDate?: object
   constructor(props) {
      super(props)
      const { startDate } = this.props
      this.startDate = startDate
      this.isChanged = false
   }

   handleChange = (date: object) => {
      this.isChanged = true
      const { onChangeTime } = this.props
      this.startDate = date
      onChangeTime(date)
   }

   render() {
      const { label } = this.props
      const placeholderText = 'Select the date and time'
      return (
         <DateAndTimeStyle>
            <Label>
               {label}
               <Star>*</Star>
            </Label>
            <DataAndTimeDisplay>
               <Icon>
                  <RiCalendarLine />
               </Icon>

               <DatePicker
                  placeholderText={placeholderText}
                  selected={this.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat='HH:mm'
                  timeIntervals={1}
                  timeCaption='time'
                  dateFormat='MMMM d, yyyy h:mm aa'
                  minDate={new Date()}
               />
            </DataAndTimeDisplay>
         </DateAndTimeStyle>
      )
   }
}
export { DateTime }
