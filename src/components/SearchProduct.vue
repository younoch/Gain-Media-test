<template>
  <div class="row mb-2 mb-md-3 justify-content-end">
    <div class="col col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="input-group">
        <input
          type="search"
          v-model="query"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          @keyup="updateQuery(query)"
        />
        <button @click="updateQuery(query)" type="button" class="btn btn-outline-primary ms-1">
          Search
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useProductStore } from "@/stores/product.js";

let query = ref(null)

const productStore = useProductStore();
const { updateQuery } = productStore;
</script>
