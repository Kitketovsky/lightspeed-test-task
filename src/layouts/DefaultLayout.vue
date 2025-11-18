<script setup lang="ts">
import StoreHeader from '../components/StoreHeader.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-50">
    <StoreHeader />

    <div class="mx-auto w-full max-w-7xl grow px-4 py-8">
      <slot />
    </div>
  </div>
</template>
