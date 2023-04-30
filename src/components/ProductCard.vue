<template>
  <div class="card">
          <img :src="product.image"
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><a href="#!" class="text-muted">{{ product.cetegory }}</a></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">{{ product.name }}</h5>
              <h5 class="text-dark mb-0">${{ product.price }}</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p v-if="product.stock" class="text-muted mb-0">Stock: <span class="fw-bold">{{ product.stock }}</span></p>
              <p v-else class="text-warning mb-0">Out of Stock</p>
            </div>
            <div class="d-flex flex-column mt-4">
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button" :disabled="!product.stock" @click="addProductCart">
                    Add to Cart
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
