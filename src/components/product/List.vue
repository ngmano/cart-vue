<template>
  <div class="flex-container">
    <ListView v-for="(product, index) in products" v-bind:key="index" v-bind:product="product"></ListView>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ListView from './ListView';

export default {
    data() {
      return {
        products: [],
        qty: 0
      }
    },
    methods: {
      ...mapActions(['actList'])
    },
    mounted() {
      this.actList().then((response) => {
        if (response.status !== 200) {
          throw Error('Invalid Data');
        }
        this.products = response.content;
      }).catch((error) => {
        console.log(error)
      })
    },
    components: {
      ListView
    },
    name: 'List' 
}
</script>

<style>
  .flex-container {width: 100%; font-family: Arial, Helvetica, sans-serif}
  .product-list {
    display: flex; 
    padding: 10px 0px; 
    justify-content: center; 
    border-bottom: 1px solid
  }
  .product-img {margin-right: 20px}
  .image {width: 150px; height: 100px; margin: 0 20px 10px}
  .brand {color: green; font-weight: bold}
  .price {font-weight: bold}
  .btn {    
    background-color: #43ca43;
    padding: 10px 40px;
    font-weight: 800;
    border: 1px #43ca43 solid;
    border-radius: 5px;
  }
  .qty-box {display: inline; margin: 0px 15px;}
  .qty-btn {
    margin: 0px 5px;
    border: 1px solid #54ca44;
    background-color: #54ca44;
    padding: 2px 8px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 800;
  }
  .qty {margin: 0px 5px}
  p {margin: 4px 0px}
  button {cursor: pointer;}
</style>