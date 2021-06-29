<template>
	<div class="products" v-for='category in hasFilter' :key='category'>
		<h2 class="products__title">{{category}}</h2>
		<div class="products__wrapper">
			<product-card v-for="product in filterProducts(category)" :key="product.id" :product='product'></product-card>  
		</div>
	</div>  
</template>
<script>
import ProductCard from '../components/ProductCard'
export default {
	props: {
		filteredCategories: Array,
		products: Array,
		categories: Array
	},
	components: {
		ProductCard
	},
	computed: {
		hasFilter(){
			return this.filteredCategories.length > 0 ? this.filteredCategories : this.categories
		}
	},
	methods: {
		filterProducts(category){
      		return this.products.filter(p => p.category == category)
    	},
	}
}
</script>
<style lang='scss' scoped>
@import '../assets/scss/products'
</style>