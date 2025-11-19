<script setup lang="ts">
import IconCart from '../../lib/components/icons/IconCart.vue'
import StoreCartItemCounter from './StoreCartItemCounter.vue'

import { useSyncCart } from '../composables/useSyncCart'

useSyncCart()
</script>

<template>
	<RouterLink
		to="/cart"
		class="relative rounded-lg p-2 transition-colors hover:bg-gray-100"
		aria-label="Shopping cart"
	>
		<IconCart />
		<StoreCartItemCounter />
	</RouterLink>
</template>
