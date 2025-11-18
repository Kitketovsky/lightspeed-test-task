<script setup lang="ts">
import UISection from '../../../components/ui/UISection.vue'
import CategoryCard from './CategoryCard.vue'
import UISkeleton from '../../../components/ui/UISkeleton.vue'
import { useCategories } from '../../../composables/useCategories'

const { filteredCategories, isLoading } = useCategories()
</script>

<template>
	<UISection heading="Categories">
		<div
			v-if="isLoading"
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<UISkeleton v-for="i in 4" :key="i" class="h-48 w-full rounded-xl" />
		</div>

		<div
			v-if="filteredCategories"
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<CategoryCard
				v-for="category in filteredCategories"
				:key="category.id"
				v-bind="category"
			/>
		</div>
	</UISection>
</template>
