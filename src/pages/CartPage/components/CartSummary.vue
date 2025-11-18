<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../../../stores/cart'
import { useRouter } from 'vue-router'

const router = useRouter()

const cartStore = useCartStore()

const orderPlaced = ref(false)

const placeOrder = () => {
  orderPlaced.value = true
  setTimeout(() => {
    cartStore.clearCart()
    orderPlaced.value = false
    router.push('/')
  }, 3000)
}
</script>

<template>
  <div class="rounded-xl bg-white p-6 shadow-md">
    <div class="mb-4 flex items-center justify-between">
      <span class="text-lg text-gray-600">Total Items:</span>
      <span class="text-lg font-semibold">{{ cartStore.totalItems }}</span>
    </div>
    <div class="mb-6 flex items-center justify-between text-xl font-bold">
      <span>Total Price:</span>
      <span class="text-green-600">${{ cartStore.totalPrice.toFixed(2) }}</span>
    </div>
    <button
      @click="placeOrder"
      class="w-full rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-700"
    >
      Place Order
    </button>
  </div>
</template>
