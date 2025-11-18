<script lang="ts" setup>
import UISection from '../../../components/ui/UISection.vue'
import ProductCard from './ProductCard.vue'
import UISkeleton from '../../../components/ui/UISkeleton.vue'
import { useProducts } from '../../../composables/useProducts'

const { data, isLoading } = useProducts()
</script>

<template>
	<UISection heading="Products">
		<div
			v-if="isLoading"
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<UISkeleton v-for="i in 8" :key="i" class="h-96 w-full rounded-xl" />
		</div>

		<div
			v-if="data?.length"
			class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<ProductCard v-for="product in data" :key="product.id" v-bind="product" />
		</div>

		<div v-if="!data?.length" class="py-12 text-center text-gray-500">
			<p class="text-xl">No items found in this category</p>
		</div>
	</UISection>
</template>
