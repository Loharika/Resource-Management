import React, { Component } from 'react'
import { CheckBoxStyle } from './styledComponents'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

interface CheckBoxProps {
   isChecked: boolean
   onClickCheckBox: (isChecked) => void
}
@observer
class CheckBox extends Component<CheckBoxProps> {
   @observable isChecked: boolean
   constructor(props) {
      super(props)
      const { isChecked } = this.props
      this.isChecked = isChecked
   }
   onClickCheckBox = isChecked => {
      console.log(isChecked)
      this.isChecked = isChecked
      const { onClickCheckBox } = this.props
      onClickCheckBox(this.isChecked)
   }
   render() {
      return (
         <CheckBoxStyle
            isChecked={this.isChecked}
            type='checkbox'
            defaultChecked={this.isChecked}
            onChange={event => this.onClickCheckBox(event.target.checked)}
         />
      )
   }
}

export default CheckBox
