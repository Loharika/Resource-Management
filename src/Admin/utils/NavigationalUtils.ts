import {
   ADMIN_DASHBOARD_RESOURCES,
   ADMIN_DASHBOARD_REQUESTS,
   ADMIN_DASHBOARD_USERS
} from '../../Authentication/constants/NavigationalConstants'

export function goToAdminDashboardResources(history) {
   history.push(ADMIN_DASHBOARD_RESOURCES)
}

export function goToAdminDashboardRequests(history) {
   history.push(ADMIN_DASHBOARD_REQUESTS)
}

export function goToAdminDashboardUsers(history) {
   history.push(ADMIN_DASHBOARD_USERS)
}
