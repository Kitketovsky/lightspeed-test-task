<script setup lang="ts">
defineProps<{
	name: string
}>()
</script>

<template>
	<h1 class="mb-4 text-4xl font-bold text-gray-800">
		{{ name }}
	</h1>
</template>
