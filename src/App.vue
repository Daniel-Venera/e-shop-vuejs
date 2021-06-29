<template>
  <Navbar />
  <main class="main">
    <router-view/>
  </main>
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
<style lang='scss'>
  @import './assets/scss/global.scss';
  @import './assets/scss/main.scss'
</style>
