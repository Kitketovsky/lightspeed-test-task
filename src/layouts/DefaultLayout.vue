<script setup lang="ts">
import StoreHeader from '../components/StoreHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <StoreHeader />

    <div class="mx-auto max-w-7xl px-4 py-8">
      <slot />
    </div>
  </div>
</template>
