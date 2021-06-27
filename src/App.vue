<template>
  <div id="nav" >
    <router-link to="/">Products</router-link> |
    <router-link to="/cart">Cart {{$store.state.cart.length > 0 ? '(' + $store.state.cart.length + ')' : '' }}</router-link>
  </div>
  <router-view/>
</template>
<script>
export default{
  mounted(){
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProducts')
  }
}
</script>
<style></style>
