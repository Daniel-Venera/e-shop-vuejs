<template>
	<div class="product__counterBtn counterBtn">
		<button class="counterBtn__btn " @click='$emit("decrement")' :disabled='quantity == 1 && disabled'>-</button>
		<button class="counterBtn__btn " @click='$emit("increment")'>+</button>
		<span class="counterBtn__quantity">{{quantity}}</span>
	</div>
</template>
<script>
export default {
	props: {
		quantity: {type: Number},
		disabled: {type: Boolean, default: false},
	}
}
</script>
<style lang='scss' scoped>
	@import '../assets/scss/counterBtn';
</style>