<template>
  <div class=" row">
    <div class="col col-12 col-sm-6 col-md-8">
    <ProductGallay :products="products"></ProductGallay>
    </div>
    <div class="col col-12 col-sm-6 col-md-4">
    <CartSection :products="products"></CartSection>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import {useProductStore} from "@/stores/product.js";
import ProductGallay from "@/components/ProductGallay.vue";
import CartSection from "@/components/CartSection.vue";

const productStore = useProductStore();
const { getProducts } = storeToRefs(productStore);

const products = computed(() => getProducts.value)


</script>
