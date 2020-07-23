import React, { Component, ReactComponentElement } from 'react'
import { observer } from 'mobx-react'
import { Header } from '../../../Common/Header'
import { DashboardStyle, SelectorTab, Selectors } from './styledComponents'
interface DashboardProps {
   childComponent: any
   selector: string
   onClickResources: () => void
   onClickRequests: () => void
   onClickUsers: () => void
}
@observer
class Dashboard extends Component<DashboardProps> {
   render() {
      const {
         childComponent,
         onClickUsers,
         onClickResources,
         onClickRequests,
         selector
      } = this.props
      return (
         <DashboardStyle>
            <Header />
            <Selectors>
               <SelectorTab
                  onClick={onClickResources}
                  isSelected={selector === 'resources' ? true : false}
               >
                  Resources
               </SelectorTab>
               <SelectorTab
                  onClick={onClickRequests}
                  isSelected={selector === 'requests' ? true : false}
               >
                  Requests
               </SelectorTab>
               <SelectorTab
                  onClick={onClickUsers}
                  isSelected={selector === 'users' ? true : false}
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
