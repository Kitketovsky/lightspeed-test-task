<script setup lang="ts">
import type { StoreProduct } from '../../lib/types/products'

import ProductImage from './ProductImage.vue'
import ProductInfo from './ProductInfo.vue'

defineProps<{
	product: StoreProduct
}>()
</script>

<template>
	<div class="grid gap-8 md:grid-cols-2">
		<ProductImage :image-url="product.imageUrl" :name="product.name" />
		<ProductInfo :product="product" />
	</div>
</template>
