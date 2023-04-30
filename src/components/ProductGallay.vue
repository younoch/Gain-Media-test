<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 ">
        <SearchProduct/>
      </div>
      <div v-for="(item, index) in products" :key="index" class="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/ProductCard.vue";
import SearchProduct from "@/components/SearchProduct.vue";
const props = defineProps({
  products: {
    type: Array,
    default: () => []
  }
})
</script>

<style></style>
