<template>
  	<div class="filters">
		<span class="filters__title">Filters :</span> 
		<button v-for='(category, index) in categories' :key='index'  @click="$emit('filter-category', category)" class="filters__filter" :class='{ "filters__filter--active": isFiltered(category)  }'>
			{{category}}
		</button>
    </div>
</template>
<script>
export default {
	props: {
		filteredCategories: Array
	},
	computed: {
		categories(){
			return this.$store.state.categories
		}
	},
	methods: {
		isFiltered(category){
			return this.filteredCategories.includes(category)
    	}
	}
}
</script>
<style scoped lang='scss'>
	@import '../assets/scss/filters'
</style>