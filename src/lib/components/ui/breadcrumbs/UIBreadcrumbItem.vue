<script setup lang="ts">
import type { RouterLinkProps } from 'vue-router'
import IconArrowRight from '../../icons/IconArrowRight.vue'

defineProps<{
	id: string | number
	name: string
	options: RouterLinkProps['to']
	isLast: boolean
}>()
</script>

<template>
	<li class="flex items-center gap-2">
		<RouterLink
			v-if="!isLast"
			:to="options"
			class="text-gray-600 transition-colors hover:text-indigo-600"
		>
			{{ name }}
		</RouterLink>

		<span v-else class="font-semibold text-gray-800">
			{{ name }}
		</span>

		<IconArrowRight v-if="!isLast" />
	</li>
</template>
