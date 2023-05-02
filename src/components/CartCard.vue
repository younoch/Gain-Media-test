<template> 
  <div class="row p-2">
    <div class="col col-6 d-flex align-items-center">
      <div
        class="rounded-pill d-inline-block list-icon d-flex justify-content-center align-items-center border"
      >
        <i class="bi-chevron-right font-12"></i>
      </div>
      <p class="m-0 ms-2 font-14">{{ product.name }}</p>
    </div>

    <div class="counter d-flex align-items-center col col-3">
      <button
        class="rounded-circle d-inline-block event-btn d-flex justify-content-center align-items-center btn btn-outline-secondary p-0 px-2" @click="dicreaseCart(product)" 
      >
        -
      </button>
      <span class="d-inline-block px-2 font-14">{{product.quantity}}</span>
      <button
        class="rounded-circle d-inline-block event-btn d-flex justify-content-center align-items-center btn btn-outline-secondary p-0 px-2" @click="increseCart(product)"
      >
        +
      </button>
    </div>
    <div class="price col col-3 d-flex justify-content-between"> 
      <span class="text-end m-0 font-14">{{ (product.price * product.quantity).toFixed(2) }}</span>
      <i class="bi-trash-fill font-14" @click="removeCart(product.id)"></i>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/product.js";
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
const productStore = useProductStore();
const { removeItemFromCart, increseCart, dicreaseCart } = productStore;

const removeCart = (id) => {
  removeItemFromCart(id)
}

</script>

<style lang="scss" scoped>
.list-icon {
  height: 21px;
  width: 21px !important;
}
.event-btn {
  height: 18px;
  width: 18px !important;
}
</style>
