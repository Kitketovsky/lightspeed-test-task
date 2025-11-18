import { defineStore } from 'pinia'
import { $api } from '../api'
import { useCategoriesStore } from './categories'
import { useQuery } from '@tanstack/vue-query'
import { watch } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const categoriesStore = useCategoriesStore()

  const { data, isLoading, isSuccess, refetch, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      $api.products.getProducts({
        categoryId: categoriesStore.currentCategoryId,
      }),
    select: (data) => data.items,
  })

  watch(
    () => categoriesStore.currentCategoryId,
    () => refetch(),
  )

  return { products: data, isLoading, isSuccess, isError, error }
})
