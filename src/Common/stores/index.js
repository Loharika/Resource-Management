import AuthStore from '../../Authentication/stores/AuthStore'
import AdminStore from '../../Admin/stores/AdminStore'
import AuthService from '../../Authentication/services/AuthService/index.fixture'
import AdminService from '../../Admin/services/AdminService/index.fixture'
const authService = new AuthService()
const authStore = new AuthStore(authService)

const adminService = new AdminService()
const adminStore = new AdminStore(adminService)
export default {
   authStore,
   adminStore
}
