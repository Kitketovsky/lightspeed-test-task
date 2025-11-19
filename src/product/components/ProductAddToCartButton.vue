<script setup lang="ts">
import IconCart from '../../lib/components/icons/IconCart.vue'

defineProps<{
	onAddToCart: () => void
}>()
</script>

<template>
	<div class="space-y-4">
		<button
			@click="onAddToCart"
			class="w-full transform rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
		>
			<span class="flex items-center justify-center gap-2">
				<IconCart class="text-white" />
				Add to Cart
			</span>
		</button>
	</div>
</template>
