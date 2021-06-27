<template>
	<div>
		<button @click='this.$emit("decrement")' :disabled='quantity == 1 && disabled'>-</button>
		<button @click='this.$emit("increment")'>+</button>
		{{quantity}}
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
<style>
</style>