<template>
  <div id="app">
    <HomePage></HomePage>
<!--    <ProductDetailComponent></ProductDetailComponent>-->
<!--    <CartComponent></CartComponent>-->

  </div>
</template>

<script>
  import HomePage from "@/pages/Home";
// import CartComponent from "@/components/CartComponent";

// import ProductDetailComponent from "@/components/ProductDetailComponent";
export default {
  name: 'App',
  components: {
    HomePage
    // ProductDetailComponent,
    // CartComponent
  }
}
</script>

<style>
#app {

}
</style>
