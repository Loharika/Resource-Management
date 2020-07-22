import React, { Component } from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import { TableStyle } from './styledComponents'

interface DisplayTableProps {
   headers: Array<String>
}
@observer
class DisplayTable extends Component<DisplayTableProps> {
   render() {
      return (
         <TableStyle>
            <Table celled striped>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell colSpan='3'>
                        Git Repository
                     </Table.HeaderCell>
                  </Table.Row>
               </Table.Header>

               <Table.Body>
                  <Table.Row>
                     <Table.Cell>
                        <Icon name='file outline' /> Gruntfile.js
                     </Table.Cell>
                     <Table.Cell>Initial commit</Table.Cell>
                     <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
                  </Table.Row>
               </Table.Body>
            </Table>
         </TableStyle>
      )
   }
}

export default DisplayTable
