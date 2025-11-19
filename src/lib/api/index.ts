import products from './products'
import categories from './categories'

import { http } from './http'

export const $api = {
  products: products(http),
  categories: categories(http),
}
