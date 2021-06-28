<template>
  <div class="nav">
    <router-link class="nav__link nav__link--logo " to="/">VueJS Store</router-link>
    <router-link class="nav__link" to="/cart"><font-awesome-icon icon="shopping-cart"></font-awesome-icon> ({{$store.state.cart.length }})</router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/nav'
</style>
