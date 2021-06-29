import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faShoppingCart, faTimes, faTrash)
import router from './router'
import store from './store'
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
