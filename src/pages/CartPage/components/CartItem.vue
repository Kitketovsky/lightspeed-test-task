<script lang="ts" setup>
import IconCart from '../../../components/icons/IconCart.vue'
import IconMinus from '../../../components/icons/IconMinus.vue'
import IconPlus from '../../../components/icons/IconPlus.vue'
import { useCartStore, type CartItem } from '../../../stores/cart'

const { product, quantity } = defineProps<CartItem>()

const { id, defaultDisplayedPriceFormatted, name, imageUrl } = product

const cartStore = useCartStore()

const removeItem = (productId: CartItem['product']['id']) => {
	cartStore.removeItem(productId)
}

const updateQuantity = (
	productId: CartItem['product']['id'],
	quantity: CartItem['quantity'],
) => {
	cartStore.updateQuantity(productId, quantity)
}
</script>

<template>
	<div
		class="flex items-center gap-4 border-b border-b-gray-200 p-6 transition-colors last:border-b-0 hover:bg-gray-50"
	>
		<!-- Product Image -->
		<div class="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
			<img
				v-if="imageUrl"
				:src="imageUrl"
				:alt="name"
				class="h-full w-full object-cover"
			/>
			<div
				v-else
				class="flex h-full w-full items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600"
			>
				<span class="text-xl font-bold text-white">{{ product.name[0] }}</span>
			</div>
		</div>

		<!-- Product Info -->
		<div class="grow">
			<h3 class="mb-1 text-lg font-semibold text-gray-800">
				{{ name }}
			</h3>
			<p class="text-xl font-bold text-green-600">
				{{ defaultDisplayedPriceFormatted }}
			</p>
		</div>

		<!-- Quantity Controls -->
		<div class="flex items-center gap-3">
			<button
				@click="updateQuantity(id, quantity - 1)"
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
				:disabled="quantity <= 1"
			>
				<IconMinus />
			</button>
			<span class="w-8 text-center text-lg font-semibold">{{ quantity }}</span>
			<button
				@click="updateQuantity(id, quantity + 1)"
				class="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 transition-colors hover:bg-gray-300"
			>
				<IconPlus />
			</button>
		</div>

		<!-- Delete Button -->
		<button
			@click="removeItem(id)"
			class="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50"
			aria-label="Remove item"
		>
			<IconCart />
		</button>
	</div>
</template>
