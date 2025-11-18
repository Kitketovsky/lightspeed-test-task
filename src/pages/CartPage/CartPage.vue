<script setup lang="ts">
import UISection from '../../components/ui/UISection.vue'
import { useCartStore } from '../../stores/cart'

import CartEmpty from './components/CartEmpty.vue'
import CartItem from './components/CartItem.vue'
import CartSummary from './components/CartSummary.vue'

const cartStore = useCartStore()
</script>

<template>
	<UISection heading="Shopping Cart">
		<CartEmpty v-if="cartStore.isCartEmpty" />

		<div v-else>
			<div class="mb-6 overflow-hidden rounded-xl bg-white shadow-md">
				<CartItem
					v-for="item in cartStore.cart"
					:key="item.product.id"
					v-bind="item"
				/>
			</div>

			<CartSummary />
		</div>
	</UISection>
</template>
