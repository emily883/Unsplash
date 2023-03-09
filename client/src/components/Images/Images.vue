<template>
  <div class="card-columns">
    <div class="card" :key="item.id" v-for="item in items">
      <img :src="item.image" class="card-img custom-Img" alt="Imagen {{ index }}">
    </div>
  </div>
</template>

<style src="./images.module.css"></style>

<script>
export default {
  name: "Images",
  props: {
    items: Array,
  },
};
</script>
