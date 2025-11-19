<script lang="ts" setup generic="T extends Array<unknown>">
const {
	layout = 'list',
	loading,
	heading,
} = defineProps<{
	data: T | undefined
	layout?: 'list' | 'grid'
	loading?: boolean
	error?: boolean
	heading?: string
	hidden?: boolean
}>()
</script>

<template>
	<div v-if="!hidden" class="flex flex-col gap-4">
		<slot name="header">
			<div>
				<h2 v-if="heading" class="text-3xl font-semibold text-gray-700">
					{{ heading }}
				</h2>
			</div>
		</slot>

		<div>
			<slot v-if="layout === 'list' && loading" name="listLoading" />
			<slot
				v-if="layout === 'list' && data && data.length"
				name="list"
				:items="data"
			/>

			<slot v-if="layout === 'grid' && loading" name="gridLoading" />
			<slot
				v-if="layout === 'grid' && data && data.length"
				name="grid"
				:items="data"
			/>

			<slot v-if="!loading && error" name="itemsError" />
			<slot
				v-if="!loading && !error && data && data.length === 0"
				name="itemsEmpty"
			/>
		</div>

		<div>
			<slot name="footer" />
		</div>
	</div>
</template>
