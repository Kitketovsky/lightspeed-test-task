import type { ApiResponse } from './api'

export interface StoreCategory {
  id: number
  name: string
  productCount?: number
  parentId?: number
}

export type ApiGetCategoriesResponse = ApiResponse<StoreCategory[]>
