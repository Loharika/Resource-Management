import {
   ADMIN_DASHBOARD_RESOURCES,
   ADMIN_DASHBOARD_REQUESTS,
   ADMIN_DASHBOARD_USERS,
   ADD_RESOURCE,
   UPDATE_RESOURCE
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
export function goToAddResourcePage(history) {
   history.push(ADD_RESOURCE)
}
export function goToResourceDetails(history, resourceId) {
   history.push(`${ADMIN_DASHBOARD_RESOURCES}/${resourceId}`)
}
export function goToUpdateResource(history, resourceId) {
   history.push(`${UPDATE_RESOURCE}/${resourceId}`)
}
