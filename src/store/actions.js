import axios from 'axios'
export default {
	getProducts({state, commit}){
		commit('loadingStatus', true)
		axios.get(state.productsUrl).then(response=>{
			commit('getProducts', response.data)
			commit('loadingStatus', false)
		})
	},
	getCategories({state, commit}){
		commit('loadingStatus', true)
		axios.get(state.categoriesUrl).then(response=>{
			commit('getCategories', response.data)
			commit('loadingStatus', false)
		})
	},
	getProduct({state, commit }, id){
		commit('loadingStatus', true)
		axios.get(state.productsUrl + '/' + id).then(response=>{
			commit('getProduct', response.data)
			commit('loadingStatus', false)
		})
	},
	addCart({commit}, quantity){
		commit('addCart', quantity)
	},
	deleteCartProduct({commit}, cartProduct){
		commit('deleteCartProduct', cartProduct)
	}
}