import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    props: true,
    component: Product
  },
  {
    path: '/cart/',
    name: 'cart',
    component: Cart
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
