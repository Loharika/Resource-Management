import React, {
   Component,
   ReactComponentElement,
   FunctionComponent
} from 'react'
import { observer } from 'mobx-react'
import { Header } from '../../../Common/components/Header'
import { DashboardStyle, SelectorTab, Selectors } from './styledComponents'
import { action } from 'mobx'
import { Dimmer, Loader } from 'semantic-ui-react'
interface DashboardProps {
   renderChildComponent: () => any
   selector: string
   onClickResources: () => void
   onClickRequests: () => void
   onClickUsers: () => void
   onClickAddResource: () => void
   getPostAcceptedRequestsAPIStatus: any
   getPostRejectedRequestsAPIStatus: any
}
@observer
class Dashboard extends Component<DashboardProps> {
   render() {
      const {
         renderChildComponent,
         onClickUsers,
         onClickResources,
         onClickRequests,
         selector,
         getPostAcceptedRequestsAPIStatus: acceptStatus,
         getPostRejectedRequestsAPIStatus: rejectStatus
      } = this.props
      const isLoading =
         (acceptStatus > 0 && acceptStatus < 200) ||
         (rejectStatus > 0 && rejectStatus < 200)

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
