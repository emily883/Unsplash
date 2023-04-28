<template>
  <div class="NavBarContainer">
    <div class="Logo">
      <img src="../../assets/unsplashLogo.svg" alt="Logo Unsplash" />
      <div class="Search_input">
        <img
          src="../../assets/SearchIcon.svg"
          alt="Search Logo Icon"
          id="SearchIcon"
        /><input
          id="Input_search"
          type="text"
          placeholder="Search by name"
          @input="onChange($event)"
        />
      </div>
    </div>
    <button class="Add_Photo_button" @click="modal.openModal">
      Add a photo
    </button>
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
