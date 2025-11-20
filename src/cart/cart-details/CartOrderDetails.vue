<script setup lang="ts">
import { computed, toRaw } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { $api } from '../../lib/api'
import { useCartStore } from '../../lib/stores/cart'

import UIDataView from '../../lib/components/ui/UIDataView.vue'

import CartListLayout from './CartListLayout.vue'
import CartCard from '../cart-card/CartCard.vue'
import CartEmpty from './states/CartEmpty.vue'
import CartSummary from './CartSummary.vue'

import CartOrderSending from './states/CartOrderSending.vue'
import CartOrderFailedMessage from './states/CartOrderFailedMessage.vue'
import CartOrderSuccessMessage from './states/CartOrderSuccessMessage.vue'

const cartStore = useCartStore()

const handleRemove = (productId: number) => {
	cartStore.removeItem(productId)
}

const handleUpdateQuantity = (productId: number, quantity: number) => {
	cartStore.updateQuantity(productId, quantity)
}

async function onPlaceOrder() {
	mutateAsync()
}

const mutationKey = computed(() => ['order', cartStore.cart])

const { isPending, isSuccess, isError, isIdle, mutateAsync } = useMutation({
	mutationKey,
	mutationFn: () => $api.orders.sendMockOrder({ cart: toRaw(cartStore.cart) }),
})
</script>

<template>
	<UIDataView v-if="isIdle" :data="cartStore.cart" heading="Shopping Cart">
		<template #list="{ items }">
			<CartListLayout>
				<CartCard
					v-for="item in items"
					:key="item.product.id"
					v-bind="item"
					@remove="handleRemove"
					@update-quantity="handleUpdateQuantity"
				/>
			</CartListLayout>
		</template>

		<template #itemsEmpty>
			<CartEmpty />
		</template>

		<template #footer>
			<CartSummary
				:total-items="cartStore.totalItems"
				:total-price="cartStore.totalPrice"
				@place-order="onPlaceOrder"
			/>
		</template>
	</UIDataView>

	<CartOrderSending v-if="isPending" />
	<CartOrderSuccessMessage v-if="isSuccess" />
	<CartOrderFailedMessage v-if="isError" />
</template>
