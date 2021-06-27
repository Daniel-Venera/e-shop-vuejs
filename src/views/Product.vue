<template>
  <div v-if='loading'>
	spinner
  </div>
  <div v-else>
	{{product}}
	<div>
		<counter-button :quantity="quantity" @increment='increment' @decrement='decrement' :disabled="true" ></counter-button>
		<button @click='$store.dispatch("addCart", quantity)'>add to cart</button>
	</div>
  </div>
</template>
<script>
import CounterButton from '../components/CounterButton.vue'
export default {
	components: {
		CounterButton
	},
	data(){
		return {
			quantity: 1
		}
	},
	computed:{
		product(){
			return this.$store.getters.product
		},
		loading(){
			return this.$store.getters.loading
    	}
	},
	mounted(){
		this.$store.dispatch('getProduct', this.$route.params.id)
	},
	methods: {
		increment(){
			this.quantity++
		},
		decrement(){
			if (this.quantity > 1){
				this.quantity--
			}
		}
	}
}
</script>
<style>
</style>