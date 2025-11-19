import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { $router } from './lib/router/router'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use($router)
app.use(pinia)

app.use(VueQueryPlugin, {
	queryClientConfig: {
		defaultOptions: {
			queries: {
				retry: 3,
			},
		},
	},
})

app.mount('#app')
