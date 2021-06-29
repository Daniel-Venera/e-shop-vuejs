<template>
  <div v-if='loading' class="loading">
      <div></div><div></div>
  </div>
  <div v-else class="product">
	<div class="product__imgCtn">
		<img class="product__img" :src="product.image" />
	</div>
	<div class="product__infos">
		<h1 class="product__title">{{product.title}}</h1>
		<span class="product__label">{{product.category}}</span>
		<p class="product__desc">{{product.description}}</p>
		<span class="product__price">{{product.price}} $</span>
		<counter-button :quantity="quantity" @increment='increment' @decrement='decrement' :disabled="true" ></counter-button>
		<button class="btn" @click='addCart(quantity)'>add to cart</button>
	</div>
	<div class="product__modal modal" v-if='modalOpen' @click.self="closeModal">
		<div class="modal__body">
			<span class="modal__info">This product has been added to your cart : </span>
			<span class="modal__info">{{quantity}} x <strong>{{product.title}}</strong> </span>
			<img class="modal__img" :src="product.image" />
			<router-link to='/cart' class="modal__btn btn">See cart</router-link>
			<div class="modal__close" @click="closeModal" ><font-awesome-icon icon="times"></font-awesome-icon></div>
		</div>
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
			quantity: 1,
			modalOpen: false
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
		},
		addCart(quantity){
			this.$store.dispatch("addCart", quantity)
			this.modalOpen = true
		},
		closeModal(){
			this.modalOpen = false
		}
	}
}
</script>
<style lang='scss' scoped>
	@import '../assets/scss/loading';
	@import '../assets/scss/product';
	@import '../assets/scss/modal';
	@import '../assets/scss/btn'
</style>