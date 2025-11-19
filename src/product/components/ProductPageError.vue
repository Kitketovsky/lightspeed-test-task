<script setup lang="ts">
import { $router } from '../../lib/router/router'

const goBack = () => {
	$router.back()
}
</script>

<template>
	<div class="py-16 text-center">
		<svg
			class="mx-auto mb-4 h-16 w-16 text-red-500"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<h2 class="mb-2 text-2xl font-semibold text-gray-800">Product Not Found</h2>
		<button
			@click="goBack"
			class="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
		>
			Go Back
		</button>
	</div>
</template>
