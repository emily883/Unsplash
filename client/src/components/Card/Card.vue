<template>
  <div :key="images.id" @mouseenter="hover = true" @mouseleave="hover = false">
    <div>
      <div class="hover" v-show="hover">
        <button id="DeleteButton" @click="deleteItem(images.id)">delete</button>
        <span class="ImageLabel">{{ images.label }}</span>
      </div>
      <img
        :src="images.image"
        class="card-img custom-img"
        alt="Imagen {{ images.label }}"
      />
    </div>
  </div>
</template>

<style src="./Card.modules.css"></style>

<script>
import { useStore } from "vuex";

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
  setup() {
    const store = useStore();

    function deleteItem(id) {
      if (id) {
        store.dispatch("deletePhoto", id);
      }
    }

    return { deleteItem };
  },
};
</script>
