<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div
    class="mx-auto flex h-full max-w-2xl flex-col items-center justify-center text-center"
  >
    <div class="mb-8">
      <h1
        class="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-9xl font-black text-transparent"
      >
        404
      </h1>
    </div>

    <div class="mb-8">
      <svg
        class="mx-auto h-32 w-32 text-indigo-600 opacity-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
        Oops! Page Not Found
      </h2>
      <p class="mb-2 text-lg text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p class="text-gray-500">Don't worry, let's get you back on track!</p>
    </div>

    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        @click="goHome"
        class="group relative w-full transform rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl sm:w-auto"
      >
        <span class="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
          Go Home
        </span>
      </button>

      <button
        @click="goBack"
        class="w-full rounded-lg border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg sm:w-auto"
      >
        <span class="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Go Back
        </span>
      </button>
    </div>

    <div class="mt-16 text-sm text-gray-400">
      <p>Error Code: 404 - Page Not Found</p>
    </div>
  </div>
</template>
