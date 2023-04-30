<template>
  <section class="h-100">
  <div class="container h-100 py-1">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
        </div>
        <template v-if="cartList.length">
          <template v-for="(item, index) in cartList" :key="index">
          <CartCard :product="item"/>
        </template>
          <button type="button" class="btn btn-primary btn-block btn-lg">Proceed to Pay</button>
        </template>
        <h2 v-else class=" mt-2 text-center text-muted">No item in cart List</h2>
        
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import {useProductStore} from "@/stores/product.js";
import CartCard from "@/components/CartCard.vue";

const productStore = useProductStore();
const { cartList } = storeToRefs(productStore);

const products = computed(() => cartList.value)

</script>