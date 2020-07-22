import React, { Component } from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import { TableStyle } from './styledComponents'

interface DisplayTableProps {
   headers: Array<String>
}

const data = [
   { title: 1, description: 2, link: 3 },
   { title: 1, description: 2, link: 3 },
   { title: 1, description: 2, link: 3 }
]
@observer
class DisplayTable extends Component<DisplayTableProps> {
   render() {
      const { headers } = this.props
      return (
         <TableStyle>
            <Table>
               <Table.Header>
                  <Table.Row>
                     {headers.map(option => {
                        return <Table.HeaderCell>{option}</Table.HeaderCell>
                     })}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {data.map(option => (
                     <Table.Row>
                        <Table.Cell>{option.title}</Table.Cell>
                        <Table.Cell>{option.description}</Table.Cell>
                        <Table.Cell>{option.link}</Table.Cell>
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </TableStyle>
      )
   }
}

export default DisplayTable
