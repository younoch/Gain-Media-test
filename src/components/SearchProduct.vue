<template>
  <div class="row bg-white p-2 mb-1 mb-md-2">
    <div class="col col-6 col-sm-9 px-1">
      <div class="input-group">
        <div class="border px-3 py-1 bg-light">
          <i class="bi-search font-12"></i>
        </div>
        <input
          type="search"
          v-model="query"
          class="form-control"
          placeholder="Search Product"
          aria-label="Search"
          aria-describedby="search-addon"
          @keyup="updateQuery(query)"
        />
      </div>
    </div>
    <div class="col col-6 col-sm-3 px-1">
      <div class="dropdown">
        <button
          class="btn btn-white border dropdown-toggle w-100 d-flex justify-content-between align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        Category
        </button>
        <ul class="dropdown-menu">
          <li v-for="(item, index) in categories" :key="index"><a class="dropdown-item" href="#">{{item}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useProductStore } from "@/stores/product.js";

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})

let query = ref(null);

const productStore = useProductStore();
const { updateQuery } = productStore;
</script>
