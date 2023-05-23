<template>
  <div class="navbar-container sticky-top">
    <div class="Logo">
      <img
        src="../../assets/unsplashLogo.svg"
        alt="Logo Unsplash"
        class="large-logo"
      />
      <div class="logo-responsive">
        <div id="logo-head"></div>
        <div id="logo-body"></div>
      </div>
    </div>
    <div class="Search_input">
      <img
        src="../../assets/SearchIcon.svg"
        alt=""
        id="SearchIcon"
      />
      <input
        id="Input_search"
        type="text"
        placeholder="Search by name"
        :disabled="ModalStatus"
        @input="onChange($event)"
      />
    </div>
    <div class="button">
      <button class="add-photo-button" @click="openModal">Add a photo</button>
      <button class="add-photo-button-mobile" @click="openModal">
        <img src="../../assets/plus.svg" alt="Plus Button" id="plus-icon" />
      </button>
    </div>
  </div>
</template>

<!-- Style -->
<style src="./Navbar.modules.css"></style>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import scrollDown from "../../functions.js";
const store = useStore();

const ModalStatus = ref();

computed: {
  ModalStatus.value = store.getters.getModal;
}
</script>

<script>
export default {
  name: "Navbar",
  methods: {
    onChange(event) {
      scrollDown();
      // send the changes to the father's component
      this.$emit("searching", event.target.value);
    },
    openModal() {
      scrollDown();
      this.$store.dispatch("showModalView");
      // Si estas leyendo esto, 
      // que haces aca? :v
    },
  },
};
</script>
