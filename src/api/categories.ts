import type { http as HttpType } from './http'
import type { ApiGetCategoriesResponse } from '../types/categories'

export default (http: typeof HttpType) => ({
  async getCategories() {
    return await http<ApiGetCategoriesResponse>('/categories', {
      query: {
        responseFields:
          'items(id,name,productCount,parentId,imageUrl,originalImageUrl,hdThumbnailUrl)',
        withSubcategories: true,
      },
    })
  },
})
