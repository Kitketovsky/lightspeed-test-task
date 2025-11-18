<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { $api } from '../api'
import { useQuery } from '@tanstack/vue-query'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const {
  data: product,
  isLoading,
  isError,
} = useQuery({
  queryKey: ['products', route.params.productId],
  queryFn: () =>
    $api.products.getProduct({
      id: Number(route.params.productId),
    }),
  enabled: !!route.params.productId,
})

const addToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value)
  }
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <!-- Back Button -->
  <button
    @click="goBack"
    class="mb-6 flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-800"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
    Back
  </button>

  <!-- Error State -->
  <div v-if="isError" class="py-16 text-center">
    <svg
      class="mx-auto mb-4 h-16 w-16 text-red-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h2 class="mb-2 text-2xl font-semibold text-gray-800">Product Not Found</h2>
    <!-- <p class="text-gray-600 mb-6">{{ error }}</p> -->
    <button
      @click="goBack"
      class="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
    >
      Go Back
    </button>
  </div>

  <!-- Loading State -->
  <div v-if="isLoading" class="flex h-80 items-center justify-center">
    <span>Loading...</span>
  </div>

  <!-- Product Details -->
  <div v-if="product">
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Product Image -->
      <div class="relative">
        <div class="sticky top-26 aspect-square overflow-hidden rounded-lg">
          <img
            v-if="product.imageUrl"
            :src="product.imageUrl"
            :alt="product.name"
            class="h-full w-full object-cover"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
          >
            <span class="text-6xl font-bold text-white">{{
              product.name[0]
            }}</span>
          </div>
        </div>
      </div>

      <!-- Product Info -->
      <div class="flex flex-col rounded-xl bg-white p-8 shadow-lg">
        <div class="grow">
          <h1 class="mb-4 text-4xl font-bold text-gray-800">
            {{ product.name }}
          </h1>

          <div class="mb-6">
            <span class="text-4xl font-bold text-green-600">
              {{ product.defaultDisplayedPriceFormatted }}
            </span>
          </div>

          <div class="mb-8">
            <h2 class="mb-3 text-xl font-semibold text-gray-700">
              Description
            </h2>
            <div
              v-if="product.description"
              class="prose prose-gray max-w-none leading-relaxed text-gray-600"
              v-html="product.description"
            ></div>
            <p v-else class="text-gray-500 italic">No description available</p>
          </div>
        </div>

        <!-- Buy Button -->
        <div class="space-y-4">
          <button
            @click="addToCart"
            class="w-full transform rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
          >
            <span class="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for product description HTML */
.prose :deep(p) {
  margin-bottom: 1rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin-bottom: 0.5rem;
}

.prose :deep(strong) {
  font-weight: 600;
}

.prose :deep(a) {
  color: #4f46e5;
  text-decoration: underline;
}

.prose :deep(a:hover) {
  color: #4338ca;
}
</style>
