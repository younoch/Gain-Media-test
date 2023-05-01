<template>
  <section class=" py-2">
    <div class="container min-vh-90 d-flex flex-column  bg-white p-2">
        <div class="input-group">
        <div class="border px-3 py-1 bg-light">
          <i class="bi-search font-12"></i>
        </div>
        <input
          type="search"
          class="form-control"
          placeholder="Search Customer"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      <div class="mt-2 h-100 flex-grow-1 d-flex flex-column justify-content-between">
          <template v-if="cartList.length">
            <div>
            <template v-for="(item, index) in cartList" :key="index">
              <CartCard class="border-top" :class="{ 'border-bottom': cartList.length -1 === index}" :product="item" />
            </template>
            </div>
            <div class="font-14 row">
                <div class="d-flex justify-content-between p-2 border-top">
                    <span>Sub Total</span>
                    <span>${{ getCartTotal.toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between p-2 border-top">
                    <span>Tax</span>
                    <span>$0.00</span>
                </div>
                <div class="d-flex justify-content-between p-2 border-top">
                    <span>All Discount Items</span>
                    <span>$0.00</span>
                </div>
                <div class="d-flex justify-content-between p-2 border-top">
                    <span> Discount on Sub Total</span>
                    <span>$0.00</span>
                </div>
                <div class="d-flex justify-content-between p-2 border-top">
                    <span>Total (Tax Excluded)</span>
                    <span>${{ getCartTotal.toFixed(2) }}</span>
                </div>
            <button type="button" class="mt-2 btn btn-secondary btn-block btn-sm w-100">
            Pay
            </button>
            </div>
          </template>
          <h2 v-else class="mt-2 text-center text-muted">
            No item in cart List
          </h2>
        </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product.js";
import CartCard from "@/components/CartCard.vue";

const productStore = useProductStore();
const { getCartList, getCartTotal } = storeToRefs(productStore);



const cartList = computed(() => getCartList.value);



// let total = 0;
// for (let item of products) {
//   total += item.price * item.quantity;
// }
</script>
