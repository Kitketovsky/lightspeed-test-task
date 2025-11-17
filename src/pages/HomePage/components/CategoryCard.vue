<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { StoreCategory } from '../../../types/categories'

defineProps<StoreCategory>()

defineOptions({
  inheritAttrs: false,
})

const router = useRouter()

const navigateToCategory = (categoryId: number) => {
  router.push({ query: { category: categoryId } })
}
</script>

<template>
  <div
    class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
    @click="navigateToCategory(id)"
  >
    <div
      class="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden"
    >
      <div
        class="w-full h-full flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
      >
        <span class="text-white text-5xl font-bold">{{ name[0] }}</span>
      </div>
    </div>
    <div class="p-5">
      <h3
        class="text-lg font-semibold mb-1 text-gray-800 hover:text-indigo-600 transition-colors"
      >
        {{ name }}
      </h3>
      <p v-if="productCount" class="text-sm text-gray-500">
        {{ productCount }} products
      </p>
    </div>
  </div>
</template>
