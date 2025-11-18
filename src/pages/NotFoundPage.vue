<script lang="ts" setup>
import { useRouter } from 'vue-router'

import IconHome from '../components/icons/IconHome.vue'
import IconArrowLeft from '../components/icons/IconArrowLeft.vue'

const router = useRouter()

function goBack() {
	router.go(-1)
}
</script>

<template>
	<div
		class="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-12 text-center"
	>
		<div>
			<h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
				Oops! Page Not Found
			</h2>
			<p class="mb-2 text-lg text-gray-600">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<p class="text-gray-500">Don't worry, let's get you back on track!</p>
		</div>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<RouterLink
				:to="{ name: 'home' }"
				class="group relative w-full transform rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl sm:w-auto"
			>
				<span class="flex items-center justify-center gap-2">
					<IconHome />
					Go Home
				</span>
			</RouterLink>

			<button
				@click="goBack"
				class="w-full rounded-lg border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 shadow-md transition-all duration-200 hover:bg-gray-50 hover:shadow-lg sm:w-auto"
			>
				<span class="flex items-center justify-center gap-2">
					<IconArrowLeft />
					Go Back
				</span>
			</button>
		</div>
	</div>
</template>
