<template>
    <div class="footer">
        <div class="cart-overview">
            <span>Qty {{ getCartData.totalQty }}</span><br>
            <span>Total {{ getCartData.totalAmount }}</span>
        </div>
        <button type="button" class="btn" @click="checkout">Checkout</button>
        <CartModal></CartModal>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartModal from './CartModal'

export default {
    computed: {
        ...mapGetters(['getCartData'])
    },
    components: {
        CartModal
    },
    methods: {
        checkout: function() {
            if (parseInt(this.getCartData.totalQty) === 0) {
                return;
            }
            var modal = document.getElementById("cart-modal"); 
            modal.style.display = "block";
        }
    }
}
</script>

<style>
    .footer {
        background-color: #d905fdcf; 
        justify-content: center;
        margin-top: 10px;
        padding: 10px;
        display: flex;
    }
    .cart-overview {width: 50%}
    .cart-overview > span {
        color: #082680; 
        font-weight: bold; 
        font-size: 18px
    }
</style>