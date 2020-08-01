import React, { Component } from 'react'
import { Dropdown, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { DropDownStyle, DropDownIcon } from './styledComponents'
type DisplayDropDownProps = {
   onChange: (value: string) => void
   data: {
      listTitle: string
      placeholder: string
      listItems: { key: string; text: string; value: string }[]
   }
   icon?: any
   css?: any
   disabled?: boolean
}
@observer
class DropDownComponent extends Component<DisplayDropDownProps> {
   @observable isClicked: boolean
   constructor(props) {
      super(props)
      this.isClicked = false
   }
   @action.bound
   onClickDropDownItem(value) {
      this.isClicked = true
      const { onChange } = this.props
      onChange(value)
   }

   render() {
      const { data, icon, css, disabled } = this.props
      return (
         <DropDownStyle css={css}>
            <DropDownIcon>{icon}</DropDownIcon>
            <Dropdown
               text={data.listTitle}
               defaultValue={'harika'}
               disabled={disabled}
            >
               <Dropdown.Menu>
                  {data.listItems.map(option => {
                     return (
                        <Dropdown.Item
                           text={option.text}
                           value={option.value}
                           key={option.key}
                           onClick={() =>
                              this.onClickDropDownItem(option.value)
                           }
                        />
                     )
                  })}
               </Dropdown.Menu>
            </Dropdown>
         </DropDownStyle>
      )
   }
}

export default DropDownComponent
