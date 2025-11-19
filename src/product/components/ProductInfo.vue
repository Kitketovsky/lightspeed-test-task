<script setup lang="ts">
import type { StoreProduct } from '../../lib/types/products'
import { useCartStore } from '../../lib/stores/cart'

import ProductTitle from './ProductTitle.vue'
import ProductPrice from './ProductPrice.vue'
import ProductDescription from './ProductDescription.vue'
import ProductAddToCartButton from './ProductAddToCartButton.vue'

const { product } = defineProps<{
	product: StoreProduct
}>()

const cartStore = useCartStore()

const addToCart = () => {
	cartStore.addItem(product)
}
</script>

<template>
	<div class="flex flex-col rounded-xl bg-white p-8 shadow-lg">
		<div class="grow">
			<ProductTitle :name="product.name" />
			<ProductPrice :price="product.defaultDisplayedPriceFormatted" />
			<ProductDescription :description="product.description" />
		</div>

		<ProductAddToCartButton :on-add-to-cart="addToCart" />
	</div>
</template>
