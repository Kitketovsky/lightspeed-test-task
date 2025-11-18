<script setup lang="ts">
defineProps<{ heading: string }>()
</script>

<template>
  <section class="mb-12">
    <h2 class="mb-6 text-3xl font-semibold text-gray-700">{{ heading }}</h2>
    <slot />
  </section>
</template>
