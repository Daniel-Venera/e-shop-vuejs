module.exports = {
  publicPath: '/e-shop-vuejs/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
}