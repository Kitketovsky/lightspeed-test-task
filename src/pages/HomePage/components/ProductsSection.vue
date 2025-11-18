<script lang="ts" setup>
import StoreSection from '../../../components/StoreSection.vue'
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '../../../stores/products'

const store = useProductsStore()
</script>

<template>
  <StoreSection v-if="store.products?.length" heading="Products">
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        v-bind="product"
      />
    </div>

    <div v-if="!store.products.length" class="py-12 text-center text-gray-500">
      <p class="text-xl">No items found in this category</p>
    </div>
  </StoreSection>
</template>
