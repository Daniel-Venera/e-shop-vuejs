<template>
  <Navbar />
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue' 
export default{
  components: {
    Navbar
  },
  mounted(){
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
  }
}
</script>
<style></style>
