<template> 
  <div class="row p-2">
    <div class="col col-7 d-flex align-items-center">
      <div
        class="rounded-pill d-inline-block list-icon d-flex justify-content-center align-items-center border"
      >
        <i class="bi-chevron-right font-12"></i>
      </div>
      <p class="m-0 ms-2 font-14">{{ product.name }}</p>
    </div>

    <div class="counter d-flex align-items-center col col-2">
      <button
        class="rounded-circle d-inline-block event-btn d-flex justify-content-center align-items-center btn btn-outline-secondary p-0 px-2" @click="minus" 
      >
        -
      </button>
      <span class="d-inline-block px-2 font-14">{{product.quantity}}</span>
      <button
        class="rounded-circle d-inline-block event-btn d-flex justify-content-center align-items-center btn btn-outline-secondary p-0 px-2" @click="add"
      >
        +
      </button>
    </div>
    <div class="price col col-3"> 
      <p class="text-end m-0 font-14">{{ (product.price * product.quantity).toFixed(2) }}</p>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});
const add = () => {
  if (props.product.quantity < props.product.stock) {
    
    props.product.quantity++;
  }
};
const minus = () => {
  if(props.product.quantity) {
    props.product.quantity--;
  }
};
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
