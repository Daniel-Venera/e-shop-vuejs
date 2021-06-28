<template>
  <main class="main">
    <h1 class="main__title">Products</h1>
    <div v-if='loading'>
      spinner
    </div>
    <div v-else>
      <Filters @filter-category='filterCategory($event)' :filtered-categories='filteredCategories'/>
      <div v-for='category in hasFilter' :key='category'>
        <h2>{{category}}</h2>
        <product-card v-for="product in filterProducts(category)" :key="product.id" :product='product'></product-card>  
      </div>  
    </div>
  </main>
</template>
<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
export default {
  name: 'Home',
  components: {
    ProductCard, Filters
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
    },
    hasFilter(){
      if (this.filteredCategories.length > 0){
        return this.filteredCategories
      } else {
        return this.categories
      }
    }
  },
  methods: {
    filterProducts(category){
      return this.products.filter(p => p.category == category)
    },
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
</style>
