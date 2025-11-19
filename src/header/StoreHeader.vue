<script setup lang="ts">
import { RouterLink } from 'vue-router'

import StoreCart from './components/StoreCart.vue'
</script>

<template>
	<div class="sticky top-0 z-50 bg-white shadow-sm">
		<header>
			<div class="mx-auto flex max-w-7xl items-center justify-between p-4">
				<RouterLink
					to="/"
					class="text-2xl font-bold text-indigo-600 transition-colors hover:text-indigo-700"
				>
					Store
				</RouterLink>

				<StoreCart />
			</div>
		</header>
	</div>
</template>
