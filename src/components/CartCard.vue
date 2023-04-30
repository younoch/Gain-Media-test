<template>
    <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  :src="product.image"
                  class="img-fluid rounded-3" alt="Cotton T-shirt">
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">{{ product.name }}</p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn fs-2 px-1"
                @click="minus">
                  -
                </button>

                <input id="form1" min="0" name="quantity" :value="product.quantity" type="number"
                  class="form-control form-control-sm" />

                <button class="btn fs-2 px-1"
                  @click="add">
                  +
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${{ product.price * product.quantity}}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>

const props = defineProps({
  product: {
    type: Object,
    default: () => {}
    }
  
})
const add = () => {
    props.product.quantity++
}
const minus = () => {
    props.product.quantity--
}
</script>