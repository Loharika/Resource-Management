import React, { Component, ReactComponentElement } from 'react'
import { Header } from '../../../Common/Header'
import { observer } from 'mobx-react'
import { DashboardStyle, SelectorTab, Selectors } from './styledComponents'
interface DashboardProps {
   onClickSelector: (selectedTab: string) => void
   childComponent: any
   selector: string
}
@observer
class Dashboard extends Component<DashboardProps> {
   render() {
      const { childComponent, onClickSelector, selector } = this.props
      return (
         <DashboardStyle>
            <Header />
            <Selectors>
               <SelectorTab
                  onClick={() => onClickSelector('Resources')}
                  isSelected={selector === 'Resources' ? true : false}
               >
                  Resources
               </SelectorTab>
               <SelectorTab
                  onClick={() => onClickSelector('Requests')}
                  isSelected={selector === 'Requests' ? true : false}
               >
                  Requests
               </SelectorTab>
               <SelectorTab
                  onClick={() => onClickSelector('Users')}
                  isSelected={selector === 'Users' ? true : false}
               >
                  Users
               </SelectorTab>
            </Selectors>
            {childComponent}
         </DashboardStyle>
      )
   }
}

export default Dashboard
