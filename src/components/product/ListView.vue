<template>
    <div class="product-list" v-bind:productKey="product.product_key">
        <div class="product-img">
            <img v-bind:src="product.product_image_url" class="image">
            <p class="offer" v-if="(product.offer != '')">{{ product.offer }}</p>
        </div>
        <div class="product-detail">
            <p class="brand">{{ product.brand }}</p>
            <p class="offer">{{ product.product_name }}</p>
            <p class="offer">{{ product.quantity }}</p>
            <p class="offer">MRP {{ product.product_mrp }}</p>
            <p class="price">RS {{ product.product_price }}</p>
            <button type="button" class="btn" @click="qtyIncrease">Add Cart</button>
            <div class="qty-box">
                <span class="qty-btn" @click="qtyIncrease">+</span>
                <span class="qty">{{ qty }}</span>
                <span class="qty-btn" @click="qtyDecrease">-</span>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';
import { eventBus } from '../../event';

export default {
    data() {
        return {
            qty: 0,
        }
    },
    computed: {
        ...mapGetters(['getCartData'])    
    },
    methods: {
        ...mapMutations(['setCartData']),
        qtyIncrease: function() {
            this.qty = parseInt(this.qty) + 1;
            this.product.qty = this.qty;
            this.setCartData(this.product);
        },
        qtyDecrease: function() {
            if (parseInt(this.qty) === 0) {
                return;
            }
            this.qty = parseInt(this.qty) - 1;
            this.product.qty = this.qty;
            this.setCartData(this.product);
        } 
    },
    props: ["product"],
    name: 'ListView',
    created() {
        eventBus.$on('set-quantity', (data) => {
            this.qty = data;
        })
    }
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