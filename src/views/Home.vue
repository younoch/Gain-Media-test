<template>
    <header class="container">
    <Heads>Gain Media Test</Heads>
  </header>
</template>

<script>
import Heads from "@/components/Heads.vue";

export default {
  name: "Home",
  components: {Heads}, 
  props: { msg: String },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
$bl: rgb(39, 41, 43);
$blc: rgba($bl, 0.03);
$lblc: rgba($bl, 0.1);
$dive: 0.75rem;

.emerge-11 {
  z-index: 11;
}

.bd-example-row {
  .row {
    &>[class^="col-"] {
      padding-top: $dive;
      padding-bottom: $dive;
      background-color: $blc;
      border: 1px solid $lblc;
    }
  }
}
</style>
