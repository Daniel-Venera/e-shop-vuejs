<template>
  <main class="main">
    <h1 class="main__title">Products</h1>
    <div class="loading" v-if='loading'>
      <div></div><div></div>
    </div>
    <div v-else>
      <Filters @filter-category='filterCategory($event)' :filtered-categories='filteredCategories'/>
      <Products :filtered-categories='filteredCategories' :products='products' :categories='categories'/>
    </div>
  </main>
</template>
<script>
// @ is an alias to /src
import Filters from '../components/Filters'
import Products from '../components/Products'
export default {
  name: 'Home',
  components: {
    Products, Filters
  },
  data(){
    return{
      filteredCategories: []
    }
  },
  computed: {
    products(){
      return this.$store.getters.products
    },
    loading(){
      return this.$store.getters.loading
    },
    categories(){
      return this.$store.getters.categories
    }
  },
  methods: {
    filterCategory(category){
      if (this.filteredCategories.includes(category)){
        this.filteredCategories = this.filteredCategories.filter(c => c !== category)  
      } else {
        this.filteredCategories.unshift(category)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/scss/loading'
</style>
