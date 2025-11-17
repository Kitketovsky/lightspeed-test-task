import type { ApiResponse } from './api'

export interface StoreProduct {
  id: number
  name: string
  description: string

  imageUrl: string
  thumbnailUrl: string

  price: number
  defaultDisplayedPriceFormatted: string

  defaultCategoryId: number
  categoryIds: number[]
}

export type ApiGetProductsResponse = ApiResponse<StoreProduct[]>

export type ApiGetProductResponse = StoreProduct
