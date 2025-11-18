<script setup lang="ts">
import { useCartStore } from '../../../stores/cart'
import type { StoreProduct } from '../../../types/products'

const props = defineProps<StoreProduct>()

const cartStore = useCartStore()

defineOptions({ inheritAttrs: false })

const addToCart = () => {
  cartStore.addItem(props)
}
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
  >
    <RouterLink
      class="flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden bg-gray-100"
      :to="{ name: 'product', params: { productId: id } }"
    >
      <img
        v-if="thumbnailUrl"
        :src="thumbnailUrl"
        :alt="name"
        class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
      >
        <span class="px-4 text-center text-2xl font-bold text-white">{{
          name
        }}</span>
      </div>
    </RouterLink>

    <div class="flex grow flex-col gap-6 p-5">
      <RouterLink :to="{ name: 'product', params: { productId: id } }">
        <h3
          class="line-clamp-2 cursor-pointer text-lg font-semibold text-gray-800 transition-colors hover:text-indigo-600"
        >
          {{ name }}
        </h3>
      </RouterLink>

      <div class="mt-auto space-y-4">
        <p class="text-2xl font-bold text-green-600">
          {{ defaultDisplayedPriceFormatted }}
        </p>

        <button
          class="flex w-full transform cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 active:scale-95"
          @click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
