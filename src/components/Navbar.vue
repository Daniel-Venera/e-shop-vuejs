<template>
  <div id="nav" >
    <router-link to="/">Products</router-link> |
    <router-link to="/cart">Cart ({{$store.state.cart.length }})</router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style>
</style>