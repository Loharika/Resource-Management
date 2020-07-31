import React, { Component } from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import { TableStyle } from './styledComponents'

interface DisplayTableProps {
   headers: Array<String>
   data: any
   keys: any
}

const data = [
   { title: 1111, description: 211, link: 3111 },
   { title: 1, description: 257, link: 3 },
   { title: 1655, description: 2, link: 3111 }
]

@observer
class DisplayTable extends Component<DisplayTableProps> {
   render() {
      const { headers, data, keys } = this.props
      return (
         <TableStyle>
            <Table>
               <Table.Header>
                  <Table.Row>
                     {headers.map(option => {
                        return (
                           <Table.HeaderCell key={Math.random()}>
                              {option}
                           </Table.HeaderCell>
                        )
                     })}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {data.map(option => (
                     <Table.Row key={Math.random()}>
                        {keys.map((key, index) => {
                           return (
                              <Table.Cell key={option[keys[0]] + Math.random()}>
                                 {option[keys[index]]}
                              </Table.Cell>
                           )
                        })}
                     </Table.Row>
                  ))}
               </Table.Body>
            </Table>
         </TableStyle>
      )
   }
}

export default DisplayTable
