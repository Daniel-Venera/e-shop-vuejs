export default{
	getProducts(state, apiProducts){
		state.products = apiProducts
	},
	getCategories(state, apiCategories){
		state.categories = apiCategories
	},
	getProduct(state, apiProduct){
		state.product = apiProduct
	},
	loadingStatus(state, newLoadingStatus){
		state.loading = newLoadingStatus
	},
	addCart(state, quantity){
		const foundProduct = state.cart.find(p => p.id == state.product.id )
		if (foundProduct){
			state.cart = state.cart.map(p => p == foundProduct ? {...p, quantity: p.quantity + quantity} : p)	
		} else {
			state.cart.push({...state.product, quantity: quantity})
		}
	},
	deleteCartProduct(state, cartProduct){
		state.cart = state.cart.filter(p => p !== cartProduct)
	}
}