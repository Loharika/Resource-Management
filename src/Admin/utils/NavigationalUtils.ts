import {
   ADMIN_DASHBOARD_RESOURCES,
   ADMIN_DASHBOARD_REQUESTS,
   ADMIN_DASHBOARD_USERS,
   ADD_RESOURCE,
   UPDATE_RESOURCE,
   ADD_RESOURCE_ITEM,
   UPDATE_RESOURCE_ITEM
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
export function goToAddResourceItem(history) {
   history.push(ADD_RESOURCE_ITEM)
}
export function goToUpdateResourceItem(history, resourceItemId) {
   history.push(`${UPDATE_RESOURCE_ITEM}/${resourceItemId}`)
}
export function goToUserPage(history, userId) {
   console.log(history, userId)
   history.push(`${ADMIN_DASHBOARD_USERS}/${userId}`)
}
