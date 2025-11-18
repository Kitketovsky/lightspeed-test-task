<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const continueShopping = () => {
  router.push('/')
}
</script>

<template>
  <div class="py-16 text-center">
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
</template>
