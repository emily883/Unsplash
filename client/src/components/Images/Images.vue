<script setup>
import card from "../card/card.vue";

</script>

<template>
  <div class="card-columns">
    <div class="card" :key="item.id" v-for="item in items">
      <card :image="item" :key="item.id" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
  margin-top: 1.7vw;
}
.card-columns {
  margin: 1vw 2vw 3vw 2vw;
}

</style>

<script>
export default {
  name: "Images",
  components: {
    card,
  },
  props: {
    items: Array,
  },
};
</script>
