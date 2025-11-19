import { useStorage } from '@vueuse/core'
import { onMounted, watch } from 'vue'
import { useCartStore } from '../../lib/stores/cart'

export function useSyncCart() {
	const CART_STORAGE_KEY = 'ecwid-cart'

	const cartStore = useCartStore()

	const localCart = useStorage(CART_STORAGE_KEY, cartStore.cart)

	onMounted(() => {
		cartStore.cart = localCart.value
	})

	watch(cartStore.cart, () => {
		localCart.value = cartStore.cart
	})
}
