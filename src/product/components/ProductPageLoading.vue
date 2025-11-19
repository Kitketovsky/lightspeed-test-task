<script setup lang="ts">
import UISkeleton from '../../lib/components/ui/UISkeleton.vue'
</script>

<template>
	<div class="flex flex-col gap-6 md:flex-row">
		<UISkeleton class="h-80 w-full rounded-xl" />
		<UISkeleton class="h-96 w-full rounded-xl" />
	</div>
</template>
