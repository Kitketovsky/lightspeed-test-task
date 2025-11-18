<script lang="ts" setup>
import { useCartStore, type CartItem } from '../../../stores/cart'

const { product, quantity } = defineProps<CartItem>()

const { id, defaultDisplayedPriceFormatted, name, imageUrl } = product

const cartStore = useCartStore()

const removeItem = (productId: CartItem['product']['id']) => {
  cartStore.removeItem(productId)
}

const updateQuantity = (
  productId: CartItem['product']['id'],
  quantity: CartItem['quantity'],
) => {
  cartStore.updateQuantity(productId, quantity)
}
</script>

<template>
  <div
    class="flex items-center gap-4 border-b border-b-gray-200 p-6 transition-colors last:border-b-0 hover:bg-gray-50"
  >
    <!-- Product Image -->
    <div class="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="name"
        class="h-full w-full object-cover"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
      >
        <span class="text-xl font-bold text-white">{{ product.name[0] }}</span>
      </div>
    </div>

    <!-- Product Info -->
    <div class="grow">
      <h3 class="mb-1 text-lg font-semibold text-gray-800">
        {{ name }}
      </h3>
      <p class="text-xl font-bold text-green-600">
        {{ defaultDisplayedPriceFormatted }}
      </p>
    </div>

    <!-- Quantity Controls -->
    <div class="flex items-center gap-3">
      <button
        @click="updateQuantity(id, quantity - 1)"
        class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
        :disabled="quantity <= 1"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
      <span class="w-8 text-center text-lg font-semibold">{{ quantity }}</span>
      <button
        @click="updateQuantity(id, quantity + 1)"
        class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>

    <!-- Delete Button -->
    <button
      @click="removeItem(id)"
      class="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50"
      aria-label="Remove item"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
</template>
