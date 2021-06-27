<template>
  <div class="home">
    <h1 class="title">Home</h1>
    <div v-if='loading'>
      spinner
    </div>
    <div v-else>
      <div>
        filters : 
        <button v-for='(category, index) in categories' :key='index' @click='filterCategory(category)' :class='{ active: isFiltered(category) }'>
          {{category}}
        </button>
      </div>
      <div v-if='filteredCategories.length > 0'>
        <div v-for='category in filteredCategories' :key='category'>
          <h2>{{category}}</h2>
          <product-card v-for="product in filterProducts(category)" :key="product.id" :product='product'></product-card>  
        </div>  
      </div>
      <div v-else>
        <div v-for='category in categories' :key='category'>
          <h2>{{category}}</h2>
          <product-card v-for="product in filterProducts(category)" :key="product.id" :product='product'></product-card>  
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard'
export default {
  name: 'Home',
  components: {
    ProductCard
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
    filterProducts(category){
      return this.products.filter(p => p.category == category)
    },
    filterCategory(category){
      if (this.filteredCategories.includes(category)){
        this.filteredCategories = this.filteredCategories.filter(c => c !== category)  
      } else {
        this.filteredCategories.unshift(category)
      }
    },
    isFiltered(category){
      if (this.filteredCategories.includes(category)){
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
.title{
  color: cadetblue;
}
.active{
  border: none;
}
</style>
