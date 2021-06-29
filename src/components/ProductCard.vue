<template>
	<router-link :to="{name: 'Product', params: {id: product.id} }"  class="card">
		<div class="card__imgCtn">
			<div class="card__img" :style="{background: 'url(' + product.image + ') center center no-repeat'}"></div>	
		</div>
		<!-- <img :src="product.image" alt="" class="card__img"> -->
		<div class="card__body">
			<h2 class="card__title">{{product.title}}</h2>
		</div>
	</router-link>
</template>
<script>
export default {
	props: {
		product: Object
	}
}
</script>
<style lang='scss' scoped>
	@import '../assets/scss/card.scss';
</style>