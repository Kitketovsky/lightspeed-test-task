<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { $api } from '../lib/api'
import { $route } from '../lib/router/router'

import ProductPageBackButton from './components/ProductPageBackButton.vue'
import ProductPageError from './components/ProductPageError.vue'
import ProductPageLoading from './components/ProductPageLoading.vue'
import ProductPageDetails from './components/ProductPageDetails.vue'

const {
	data: product,
	isLoading,
	isError,
} = useQuery({
	queryKey: ['products', $route.value.params.productId],
	queryFn: () =>
		$api.products.getProduct({
			id: Number($route.value.params.productId),
		}),
	enabled: !!$route.value.params.productId,
})
</script>

<template>
	<ProductPageBackButton />
	<ProductPageError v-if="isError" />
	<ProductPageLoading v-if="isLoading" />
	<ProductPageDetails v-if="product" :product="product" />
</template>
