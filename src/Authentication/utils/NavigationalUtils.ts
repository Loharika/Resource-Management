import {
   ADMIN_DASHBOARD,
   USER_DASHBOARD,
   DASHBOARD_SIGNIN_PAGE
} from '../constants/NavigationalConstants'

export const goToAdminDashboard = history => {
   history.push(ADMIN_DASHBOARD)
}

export const goToUserDashboard = history => {
   history.push(USER_DASHBOARD)
}

export const goToSignInPage = history => {
   history.push(DASHBOARD_SIGNIN_PAGE)
}
