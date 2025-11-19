<script setup lang="ts">
import { type RouterLinkProps } from 'vue-router'
import BreadcrumbItem from './UIBreadcrumbItem.vue'

defineProps<{
	breadcrumbs: {
		id: string | number
		name: string
		options: RouterLinkProps['to']
	}[]
}>()
</script>

<template>
	<nav v-if="breadcrumbs.length > 1" aria-label="Breadcrumb">
		<ol class="flex flex-wrap items-center gap-2">
			<BreadcrumbItem
				v-for="(item, index) in breadcrumbs"
				v-bind="item"
				:key="item.id ?? 'home'"
				:is-last="index === breadcrumbs.length - 1"
			/>
		</ol>
	</nav>
</template>
