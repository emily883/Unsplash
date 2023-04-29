<template>
  <div :key="images.id" @mouseenter="hover = true" @mouseleave="hover = false">
    <div>
      <div class="hover" v-show="hover">
        <button id="DeleteButton" @click="deleteItem(images.id)">delete</button>
        <span class="ImageLabel">{{ images.label }}</span>
      </div>
      <img
        :src="images.image"
        class="card-img custom-Img rounded-lg"
        alt="Imagen {{ images.label }}"
      />
    </div>
  </div>
</template>

<style src="./Card.modules.css"></style>

<script>
import { storeItems } from "../../store";

export default {
  name: "cards",
  props: {
    images: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    deleteItem(Id) {
      // console.log("nada");
      storeItems.deleteItem(Id);
    },
  },
};
</script>
