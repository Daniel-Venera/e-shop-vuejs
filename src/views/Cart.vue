<template>
	<div v-if='cart.length > 0'>
		<div v-for='cartProduct in cart' :key='cartProduct.id'>
			{{cartProduct}}
			<counter-button :quantity="cartProduct.quantity" @increment='increment(cartProduct)' @decrement='decrement(cartProduct)'></counter-button>
			<button @click="this.$store.dispatch('deleteCartProduct', cartProduct)">Delete article</button>
		</div>	
	</div>
	<div v-else>
		no articles in cart
	</div>
</template>
<script>
import CounterButton from '../components/CounterButton.vue'
export default {
	components: {
		CounterButton
	},
	computed: {
		cart(){
			return this.$store.getters.cart
		}
	},
	methods: {
		increment(cartProduct){
			cartProduct.quantity++
		},
		decrement(cartProduct){
			if (cartProduct.quantity > 1){
				cartProduct.quantity--
			} else {
				this.$store.dispatch('deleteCartProduct', cartProduct)
			}
		}
	}
}
</script>
<style>
</style>