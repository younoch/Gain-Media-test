<template>
  <section class="h-100 py-2">
    <div class="container bg-white p-2">
        <div class="input-group">
        <div class="border px-3 py-1 bg-light">
          <i class="bi-search font-12"></i>
        </div>
        <input
          type="search"
          v-model="query"
          class="form-control"
          placeholder="Search Customer"
          aria-label="Search"
          aria-describedby="search-addon"
          @keyup="updateQuery(query)"
        />
      </div>
      <div class=" h-100 mt-2">
          <template v-if="cartList.length">
            <template v-for="(item, index) in cartList" :key="index">
              <CartCard class="border-top" :class="{ 'border-bottom': cartList.length -1 === index}" :product="item" />
            </template>
            <div class="font-14">
                <div class="d-flex justify-content-between">
                    <span>Sub Total</span>
                    <span>$545.00</span>
                </div>
            </div>
            <div class="font-14">
                <div class="d-flex justify-content-between">
                    <span>Tax</span>
                    <span>$0.00</span>
                </div>
            </div>
            <button type="button" class="btn btn-primary btn-block btn-lg">
              Proceed to Pay
            </button>
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
const { cartList } = storeToRefs(productStore);

const products = computed(() => cartList.value);
</script>
