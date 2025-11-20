import type { Cart } from '../../stores/cart'

export default () => ({
	async sendMockOrder({ cart }: { cart: Cart }) {
		const isSuccess = Math.random() > 0.9

		console.log('Sending order...', cart)

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (isSuccess) {
					resolve({ success: true })
				} else {
					reject({ message: 'Unknown error' })
				}
			}, 2000)
		})
	},
})
