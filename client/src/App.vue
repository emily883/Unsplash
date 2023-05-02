<template>
  <div
    v-if="modal.showModal"
    class="modal-container"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <AddModal class="modal-photo" />
  </div>
  <div class="app-container">
    <Navbar class="nav-bar" />
    <div class="body-container d-flex justify-content-center">
      <div
        v-if="storeItems.isLoading"
        class="spinner-grow custom-spiner"
        role="status"
        style="width: 3rem; height: 3rem"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else>
        <Images
          v-if="storeItems.items"
          :items="storeItems.items.reverse()"
          :searchTerm="storeItems.SearchTerm"
          class="images"
        />
      </div>
    </div>
  </div>
</template>

<style src="./App.modules.css"></style>

<script>
import Images from "./components/Images/Images.vue";
import Navbar from "./components/NavBar/Navbar.vue";
import AddModal from "./components/AddPhotoModal/AddPhotoModal.vue";
import { storeItems, modal } from "./store";
const { loadItems } = storeItems;

export default {
  name: "app",
  components: {
    Navbar,
    Images,
    AddModal,
  },
  data() {
    return {
      modal,
      storeItems,
    };
  },
  beforeMount() {
    loadItems();
  },
};
</script>
