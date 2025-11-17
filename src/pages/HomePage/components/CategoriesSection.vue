<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import StoreSection from '../../../components/StoreSection.vue'
import CategoryCard from './CategoryCard.vue'
import { $api } from '../../../api'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { state } = useAsyncState(
  $api.categories.getCategories().then((v) => {
    console.log('categories', v)
    return v.items
  }),
  [],
)

const route = useRoute()

const filteredCategories = computed(() =>
  route.query.category
    ? state.value.filter(
        (category) => category.parentId === Number(route.query.category),
      )
    : state.value.filter((category) => !category.parentId),
)
</script>

<template>
  <StoreSection v-if="filteredCategories.length" heading="Categories">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <CategoryCard
        v-for="category in filteredCategories"
        :key="category.id"
        v-bind="category"
      />
    </div>
  </StoreSection>
</template>
