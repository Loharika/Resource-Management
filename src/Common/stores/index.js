import CounterStore from './CounterStore'
import AuthStore from '../../Authentication/stores/AuthStore'

import AuthService from '../../Authentication/services/AuthService/index.api'
const counterStore = new CounterStore()
const authService = new AuthService()
const authStore = new AuthStore(authService)

export default {
   counterStore,
   authStore
}
