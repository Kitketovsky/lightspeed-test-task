import products from './products/products'
import categories from './categories/categories'
import orders from './orders/orders'

import { http } from './http'

export const $api = {
	products: products(http),
	categories: categories(http),
	orders: orders(),
}
