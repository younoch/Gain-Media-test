<template>
  <div>
    <ProductGallay :products="products"></ProductGallay>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import {useProductStore} from "@/stores/product.js";
import ProductGallay from "@/components/ProductGallay.vue";

const productStore = useProductStore();
const { getProducts } = storeToRefs(productStore);

const products = computed(() => getProducts.value)


</script>
