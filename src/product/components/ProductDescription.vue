<script setup lang="ts">
defineProps<{
	description?: string
}>()
</script>

<template>
	<div class="mb-8">
		<h2 class="mb-3 text-xl font-semibold text-gray-700">Description</h2>
		<div
			v-if="description"
			class="prose prose-gray max-w-none leading-relaxed text-gray-600"
			v-html="description"
		></div>
		<p v-else class="italic text-gray-500">No description available</p>
	</div>
</template>

<style scoped>
/* Custom styles for product description HTML */
.prose :deep(p) {
	margin-bottom: 1rem;
}

.prose :deep(ul),
.prose :deep(ol) {
	margin-bottom: 1rem;
	padding-left: 1.5rem;
}

.prose :deep(li) {
	margin-bottom: 0.5rem;
}

.prose :deep(strong) {
	font-weight: 600;
}

.prose :deep(a) {
	color: #4f46e5;
	text-decoration: underline;
}

.prose :deep(a:hover) {
	color: #4338ca;
}
</style>
