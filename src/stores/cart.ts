import { defineStore } from 'pinia'
import type { StoreProduct } from '../types/products'
import { computed, ref, watch } from 'vue'

export interface CartItem {
  product: StoreProduct
  quantity: number
}

const CART_STORAGE_KEY = 'ecwid-cart'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const orderPlaced = ref(false)

  const totalItems = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0),
  )

  const totalPrice = computed(() =>
    items.value.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ),
  )

  const isCartEmpty = computed(() => items.value.length === 0)

  watch(
    items,
    () => {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items.value))
    },
    { deep: true },
  )

  function loadFromLocalStorage() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        items.value = JSON.parse(stored)
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error)
      items.value = []
    }
  }

  function addItem(product: StoreProduct) {
    const existingItem = items.value.find(
      (item) => item.product.id === product.id,
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        product,
        quantity: 1,
      })
    }
  }

  function removeItem(productId: number) {
    const index = items.value.findIndex((item) => item.product.id === productId)

    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = items.value.find((item) => item.product.id === productId)

    if (item) {
      if (quantity <= 0) {
        removeItem(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    isCartEmpty,
    orderPlaced,
    loadFromLocalStorage,
    addItem,
    updateQuantity,
    clearCart,
    removeItem,
  }
})
