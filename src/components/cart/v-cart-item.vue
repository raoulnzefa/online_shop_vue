<template>
  <div class='v-cart-item'>
    <img class="v-cart-item-image" :src=" require('../../assets/images/' + cart_item_data.image) " alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.description}}</p>
      <p>{{cart_item_data.price | toFix | formattedPrice}}</p>
      <p>{{cart_item_data.article}}</p>
      
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span class="quantity-tools">
        <span class="quantity-btn" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
        <span class="quantity-btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from "../../filters/price-format";


  export default {
    name: "v-cart-item",
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix,
      formattedPrice
    },
    computed: {},
    methods: {
      decrementItem() {
        this.$emit('decrement')
      },
      incrementItem() {
        this.$emit('increment')
      },
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }
    }
  }
</script>

<style>
  .v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 25px;
    margin-bottom: 16px;

    }
    .v-cart-item-image {
      max-width: 70px;
    }

    .quantity-btn{
      cursor: pointer;
    }

    .quantity-tools {
      user-select: none;
    }
  
</style>
