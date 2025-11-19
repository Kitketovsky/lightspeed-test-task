<script setup lang="ts">
defineProps<{
	imageUrl?: string
	name: string
}>()
</script>

<template>
	<div class="relative">
		<div class="sticky top-26 aspect-square overflow-hidden rounded-lg">
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
				<span class="text-6xl font-bold text-white">{{ name[0] }}</span>
			</div>
		</div>
	</div>
</template>
