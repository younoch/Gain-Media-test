<template>
  <div class="card border-0">
    <div class="position-relative d-flex justify-content-center">
          <img :src="product.image"
            class="card-img-top mx-auto mt-2" alt="product" />
            <div v-show="!product.stock" class="position-absolute bg-warning text-white rounded-1 px-1 fw-bolder font-10 top-20 z-2">Out of Stock</div>
            <div class="position-absolute bg-secondary text-white rounded-end px-1 fw-bolder font-10 left-5 bottom-30 z-2">${{ product.price.toFixed(2) }}</div>
    </div>
          <div class="card-body pt-0">
            <div class="d-flex flex-column"> 
                  <button class="btn btn-secondary btn-secondary:active btn-sm mt-2" type="button" :disabled="!product.stock" @click="addProductCart">
                    {{ product.name }}
                  </button>
                </div>
          </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/product.js";

const props = defineProps({
  product: {
    type: Object,
    requird: true,
    default: () => ({})
  }
})

const productStore = useProductStore();
const { addToCart } = productStore;

const addProductCart = () => {
  if (props.product.stock) {
    addToCart(props.product)
  }
}
</script>

<style></style>
