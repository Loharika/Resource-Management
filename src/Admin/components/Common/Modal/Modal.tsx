import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Description } from './styledComponents'
class ModalClose extends Component {
   state = { open: false, msg: '' }

   closeConfigShow = () => {
      this.setState({ open: true })
   }

   close = () => {
      console.log(this.state.msg)
      this.setState({ open: false })
   }
   onChangeInput = value => this.setState({ msg: value })
   render() {
      const { open } = this.state

      return (
         <div>
            <Button onClick={this.closeConfigShow}>No Close on Escape</Button>

            <Modal open={open} closeOnEscape={false} onClose={this.close}>
               <Modal.Header>Delete Your Account</Modal.Header>
               <Modal.Content>
                  <Description
                     defaultValue={
                        'Are you sure you want to delete your account'
                     }
                     onChange={event => this.onChangeInput(event.target.value)}
                  />
               </Modal.Content>
               <Modal.Actions>
                  <Button onClick={this.close} negative>
                     No
                  </Button>
                  <Button
                     onClick={this.close}
                     positive
                     labelPosition='right'
                     icon='checkmark'
                     content='Yes'
                  />
               </Modal.Actions>
            </Modal>
         </div>
      )
   }
}

export default ModalClose
