<script setup lang="ts">
import { useCartStore } from '../../stores/cart'

import CartEmpty from './components/CartEmpty.vue'
import CartOrderSuccessMessage from './components/CartOrderSuccessMessage.vue'
import CartItem from './components/CartItem.vue'
import CartSummary from './components/CartSummary.vue'

const cartStore = useCartStore()
</script>

<template>
  <h2 class="mb-6 text-3xl font-semibold text-gray-700">Shopping Cart</h2>

  <CartOrderSuccessMessage v-if="cartStore.orderPlaced" />

  <CartEmpty v-else-if="cartStore.isCartEmpty" />

  <div v-else>
    <div class="mb-6 overflow-hidden rounded-xl bg-white shadow-md">
      <CartItem
        v-for="item in cartStore.items"
        :key="item.product.id"
        v-bind="item"
      />
    </div>

    <CartSummary />
  </div>
</template>
