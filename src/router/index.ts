import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'

import HomePage from '../pages/HomePage/HomePage.vue'
import ProductPage from '../pages/ProductPage.vue'
import CartPage from '../pages/CartPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes: RouterOptions['routes'] = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/category/:categoryId', component: HomePage, name: 'category' },
  { path: '/product/:productId', component: ProductPage, name: 'product' },
  { path: '/cart', component: CartPage, name: 'cart' },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'not-found' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
