<!-- <div class="navbar-container sticky-top">
    <div class="Logo">
      <div class="button-logo">
        <img src="../../assets/unsplashLogo.svg" alt="Logo Unsplash" />
        <div class="menu-toggle" @click="toggleMenu">
          <img class="boton-menu-toggle" src="../../assets/icons8-menu.png" />
        </div>
      </div>

      <div class="menu is-open" v-if="isMenuOpen">
        <div>
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
            />
          </div>
          <button class="add_photo_button" @click="modal.openModal">
            Add a photo
          </button>
        </div>
      </div>
    </div>
  </div> -->
<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light navbar-custom-container"
  >
    <a class="navbar-brand" href="#">
      <img src="../../assets/unsplashLogo.svg" alt="Logo Unsplash" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse custom-nav"
      :class="{ show: isMenuOpen }"
      id="navbarTogglerDemo02"
    >
      <form class="form-inline my-2 my-lg-0 form-custom">
        <div class="Search_input">
          <img
            src="../../assets/SearchIcon.svg"
            alt="Search Logo Icon"
            id="SearchIcon"
          />
          <input
            id="Input_search"
            type="search"
            placeholder="Search by name"
            @input="onChange($event)"
          />
        </div>
        <br />
        <button class="my-2 my-sm-0 add_photo_button" @click="modal.openModal">
          Add a photo
        </button>
      </form>
    </div>
  </nav>
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
      isMenuOpen: false,
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
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
