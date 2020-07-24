import React, {
   Component,
   ReactComponentElement,
   FunctionComponent
} from 'react'
import { observer } from 'mobx-react'
import { Header } from '../../../Common/components/Header'
import { DashboardStyle, SelectorTab, Selectors } from './styledComponents'
interface DashboardProps {
   renderChildComponent: () => any
   selector: string
   onClickResources: () => void
   onClickRequests: () => void
   onClickUsers: () => void
   onClickAddResource: () => void
}
@observer
class Dashboard extends Component<DashboardProps> {
   render() {
      const {
         renderChildComponent,
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
            {renderChildComponent()}
         </DashboardStyle>
      )
   }
}

export default Dashboard
