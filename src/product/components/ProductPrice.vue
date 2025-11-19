<script setup lang="ts">
defineProps<{
	price: string
}>()
</script>

<template>
	<div class="mb-6">
		<span class="text-4xl font-bold text-green-600">
			{{ price }}
		</span>
	</div>
</template>
