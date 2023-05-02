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
        alt="Search Logo Icon"
        id="SearchIcon"
      />
      <input
        id="Input_search"
        type="text"
        placeholder="Search by name"
        @input="onChange($event)"
        :disabled="modal.showModal"
      />
    </div>
    <div class="button">
      <button class="add-photo-button" @click="modal.openModal">Add a photo</button>
      <button class="add-photo-button-mobile" @click="modal.openModal">
        <img src="../../assets/plus.svg" alt="Plus Button" id="plus-icon" />
      </button>
    </div>
  </div>
</template>

<!-- Style -->
<style src="./Navbar.modules.css"></style>

<script>
import { modal, storeItems } from "../../store";
const { setSearchTerm } = storeItems;

export default {
  name: "Navbar",
  data() {
    return {
      modal,
      storeItems,
    };
  },
  setup() {
    const onChange = (event) => {
      setSearchTerm(event.target.value);
    };
    return {
      onChange,
    };
  },
};
</script>
