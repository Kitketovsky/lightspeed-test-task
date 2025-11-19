import type { RouterOptions } from 'vue-router'

import CatalogPage from '../../catalog/CatalogPage.vue'

export const routes: RouterOptions['routes'] = [
	{ path: '/', component: CatalogPage, name: 'home' },
	{ path: '/category/:categoryId', component: CatalogPage, name: 'category' },
	{
		path: '/product/:productId',
		component: () => import('../../product/ProductPage.vue'),
		name: 'product',
	},
	{
		path: '/cart',
		component: () => import('../../cart/CartPage.vue'),
		name: 'cart',
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('../../not-found-page/NotFoundPage.vue'),
		name: 'not-found',
	},
]
