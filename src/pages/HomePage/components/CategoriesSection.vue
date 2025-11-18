<script setup lang="ts">
import StoreSection from '../../../components/StoreSection.vue'
import CategoryCard from './CategoryCard.vue'
import { useCategoriesStore } from '../../../stores/categories'

const store = useCategoriesStore()
</script>

<template>
  <StoreSection heading="Categories">
    <div v-if="store.isLoading">Loading...</div>

    <div
      v-if="store.categories"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <CategoryCard
        v-for="category in store.categories"
        :key="category.id"
        v-bind="category"
      />
    </div>
  </StoreSection>
</template>
