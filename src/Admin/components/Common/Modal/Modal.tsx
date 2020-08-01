// import React, { Component } from 'react'
// import { Button, Modal } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
// import { Description } from './styledComponents'
// import { observer } from 'mobx-react'

// interface ModalProps {
//    isReasonNeeded?: boolean
//    header?: string
//    buttonCss?: any
//    onChangeReason?: (reason: string) => void
//    onClick
// }
// @observer
// class ModalClose extends Component {
//    state = { open: false, msg: '' }

//    closeConfigShow = () => {
//       this.setState({ open: true })
//    }

//    close = value => {
//       console.log(value)
//       console.log(this.state.msg)
//       this.setState({ open: false })
//    }
//    onChangeInput = value => this.setState({ msg: value })
//    render() {
//       const { open } = this.state

//       return (
//          <React.Fragment>
//             <Button onClick={this.closeConfigShow}>No Close on Escape</Button>

//             <Modal open={open} closeOnEscape={false} onClose={this.close}>
//                <Modal.Header>Delete Your Account</Modal.Header>
//                <Modal.Content>
//                   <Description
//                      defaultValue={
//                         'Are you sure you want to delete your account'
//                      }
//                      onChange={event => this.onChangeInput(event.target.value)}
//                   />
//                </Modal.Content>
//                <Modal.Actions>
//                   <Button onClick={() => this.close(false)} negative>
//                      No
//                   </Button>
//                   <Button
//                      onClick={() => this.close(true)}
//                      positive
//                      labelPosition='right'
//                      icon='checkmark'
//                      content='Yes'
//                   />
//                </Modal.Actions>
//             </Modal>
//          </React.Fragment>
//       )
//    }
// }

// export default ModalClose

import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Description } from './styledComponents'
import { observer } from 'mobx-react'

interface ModalProps {
   isReasonNeeded?: boolean
   header?: string
   button?: any
   onChangeReason?: (reason: string) => void
   onClickResponse?: () => void
}
@observer
class ModalClose extends Component<ModalProps> {
   state = { open: false, msg: '' }

   setOpen = value => {
      console.log(value)
      this.setState({ open: value })
   }
   render() {
      const { open } = this.state
      const { setOpen } = this
      const { header, button: Button } = this.props
      return (
         <React.Fragment>
            <Modal
               onClose={() => setOpen(false)}
               onOpen={() => setOpen(true)}
               open={open}
               trigger={<Button>Show Modal</Button>}
            >
               <Modal.Header>{header}</Modal.Header>
               <Modal.Content image>
                  <Modal.Description>
                     <input
                        defaultValue={'Would you like to upload this image'}
                     />
                  </Modal.Description>
               </Modal.Content>
               <Modal.Actions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                  <Button onClick={() => setOpen(false)} positive>
                     Ok
                  </Button>
               </Modal.Actions>
            </Modal>
         </React.Fragment>
      )
   }
}

export default ModalClose
