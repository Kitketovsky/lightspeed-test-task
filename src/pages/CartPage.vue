<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()
const orderPlaced = ref(false)

const removeItem = (productId: number) => {
  cartStore.removeItem(productId)
}

const updateQuantity = (productId: number, quantity: number) => {
  cartStore.updateQuantity(productId, quantity)
}

const placeOrder = () => {
  orderPlaced.value = true
  setTimeout(() => {
    cartStore.clearCart()
    orderPlaced.value = false
    router.push('/')
  }, 3000)
}

const continueShopping = () => {
  router.push('/')
}
</script>

<template>
  <h1 class="mb-8 text-4xl font-bold text-gray-800">Shopping Cart</h1>

  <!-- Order Success Message -->
  <div
    v-if="orderPlaced"
    class="mb-8 rounded-lg border-2 border-green-500 bg-green-50 p-8 text-center"
  >
    <svg
      class="mx-auto mb-4 h-16 w-16 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h2 class="mb-2 text-3xl font-bold text-green-700">Congratulations!</h2>
    <p class="text-lg text-green-600">
      Your order has been placed successfully!
    </p>
    <p class="mt-2 text-sm text-gray-600">Redirecting you to the store...</p>
  </div>

  <!-- Empty Cart -->
  <div v-else-if="cartStore.isCartEmpty" class="py-16 text-center">
    <svg
      class="mx-auto mb-4 h-24 w-24 text-gray-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    <h2 class="mb-4 text-2xl font-semibold text-gray-600">
      Your cart is empty
    </h2>
    <button
      @click="continueShopping"
      class="rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
    >
      Continue Shopping
    </button>
  </div>

  <!-- Cart Items -->
  <div v-else>
    <div class="mb-6 overflow-hidden rounded-xl bg-white shadow-md">
      <div
        v-for="item in cartStore.items"
        :key="item.product.id"
        class="flex items-center gap-4 border-b p-6 transition-colors last:border-b-0 hover:bg-gray-50"
      >
        <!-- Product Image -->
        <div class="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <img
            v-if="item.product.thumbnailUrl"
            :src="item.product.thumbnailUrl"
            :alt="item.product.name"
            class="h-full w-full object-cover"
          />
          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
          >
            <span class="text-xl font-bold text-white">{{
              item.product.name[0]
            }}</span>
          </div>
        </div>

        <!-- Product Info -->
        <div class="grow">
          <h3 class="mb-1 text-lg font-semibold text-gray-800">
            {{ item.product.name }}
          </h3>
          <p class="text-xl font-bold text-green-600">
            {{ item.product.defaultDisplayedPriceFormatted }}
          </p>
        </div>

        <!-- Quantity Controls -->
        <div class="flex items-center gap-3">
          <button
            @click="updateQuantity(item.product.id, item.quantity - 1)"
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
            :disabled="item.quantity <= 1"
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
          <span class="w-8 text-center text-lg font-semibold">{{
            item.quantity
          }}</span>
          <button
            @click="updateQuantity(item.product.id, item.quantity + 1)"
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
          @click="removeItem(item.product.id)"
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
    </div>

    <!-- Cart Summary -->
    <div class="rounded-xl bg-white p-6 shadow-md">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-lg text-gray-600">Total Items:</span>
        <span class="text-lg font-semibold">{{ cartStore.totalItems }}</span>
      </div>
      <div class="mb-6 flex items-center justify-between text-xl font-bold">
        <span>Total Price:</span>
        <span class="text-green-600"
          >${{ cartStore.totalPrice.toFixed(2) }}</span
        >
      </div>
      <button
        @click="placeOrder"
        class="w-full rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  </div>
</template>
