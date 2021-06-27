<template>
	<div class="card">
		<img :src="product.image" alt="" class="card__img">
		<h2>{{product.title}}</h2>
		<router-link :to="{name: 'Product', params: {id: product.id} }">Voir l'article</router-link>
	</div>
</template>
<script>
export default {
	props: {
		product: Object
	}
}
</script>
<style>
.card{
	border: 1px solid grey;
	max-width: 50%;
}
.card__img{
	width: 100%;
	height: auto;
}
</style>