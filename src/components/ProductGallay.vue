<template>
  <div class="p-2">
    <div class="row">
      <div class="col-12 ">
        <SearchProduct :categories="categories"/>
      </div>
      <div v-for="(item, index) in products" :key="index" class="col-sm-6 col-md-4 col-lg-3 mb-4 mb-lg-0 p-1">
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
let categories = [];
for (let i = 0; i < props.products.length; i++) {
    if (!categories.includes(props.products[i].category)) {
        categories.push(props.products[i].category);
    }
}
</script>

<style></style>
