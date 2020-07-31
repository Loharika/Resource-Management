// import { DASHBOARD_PREFIX, ADMIN_DASHBOARD, USER_DASHBOARD } from ''

const DASHBOARD_PREFIX = '/resource-management'
const ADMIN_DASHBOARD = '/resource-management/admin'
const USER_DASHBOARD = '/resource-management/user'
const ADMIN_DASHBOARD_RESOURCES = '/resource-management/admin/resources'
const ADMIN_DASHBOARD_REQUESTS = '/resource-management/admin/requests'
const ADMIN_DASHBOARD_USERS = '/resource-management/admin/users'
const ADD_RESOURCE = '/resource-management/admin/add-resource'
const UPDATE_RESOURCE = '/resource-management/admin/resources/update-resource'
const ADMIN_RESOURCE_DETAILS = '/resource-management/admin/resources-details'

const ADD_RESOURCE_ITEM =
   '/resource-management/admin/resources/add-resource-item'
const UPDATE_RESOURCE_ITEM =
   '/resource-management/admin/resources/update-resource-item'
export const DASHBOARD_SIGNUP_PAGE: string = `${DASHBOARD_PREFIX}/signup`
export const DASHBOARD_SIGNIN_PAGE: string = `${DASHBOARD_PREFIX}/signin`
export const DASHBOARD_USERPROFILE: string = `${DASHBOARD_PREFIX}/user-profile`
export {
   ADMIN_DASHBOARD,
   USER_DASHBOARD,
   ADMIN_DASHBOARD_RESOURCES,
   ADMIN_DASHBOARD_REQUESTS,
   ADMIN_DASHBOARD_USERS,
   ADD_RESOURCE,
   UPDATE_RESOURCE,
   ADD_RESOURCE_ITEM,
   UPDATE_RESOURCE_ITEM,
   ADMIN_RESOURCE_DETAILS
}
