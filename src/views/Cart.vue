<template>
	<div>
		<h1 class="main__title">Cart</h1>
		<div v-if='cart.length > 0'>
			<transition-group name='cart' tag="div">
				<div v-for='cartProduct in cart' :key='cartProduct' class="cart">
					<div class="cart__img" :style="{background: 'url(' + cartProduct.image + ') center center no-repeat'}"></div>
					<h2 class="cart__title">
						{{cartProduct.title}}
					</h2>
					<counter-button :quantity="cartProduct.quantity" @increment='increment(cartProduct)' @decrement='decrement(cartProduct)'></counter-button>
					<font-awesome-icon class="cart__delete" icon='trash' @click="$store.dispatch('deleteCartProduct', cartProduct)">Delete article</font-awesome-icon>
				</div>	
			</transition-group>
		</div>	
		<div v-else>
			<p class="main__desc">
				You does not have articles in your cart yet
			</p>
			<router-link to='/' class="btn">See products</router-link>
		</div>
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
<style lang='scss' scoped>
	@import '../assets/scss/cart';
	@import '../assets/scss/btn'
</style>