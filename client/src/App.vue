<template>
  <div
    v-if="modal.showModal"
    class="modal-container"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <AddPhoto class="modal-photo" />
  </div>
  <div class="app-container">
    <Navbar class="nav-bar" />
    <div v-if="isLoading">Cargando Fotos</div>
    <Images
      v-else-if="storeItems.items"
      :items="storeItems.items"
      :searchTerm="storeItems.SearchTerm"
      class="images"
    />
  </div>
</template>

<style src="./App.modules.css"></style>

<script>
import Images from "./components/Images/Images.vue";
import Navbar from "./components/NavBar/Navbar.vue";
import AddPhoto from "./components/AddPhotoModal/AddPhotoModal.vue";
import { storeItems, modal } from "./store";

export default {
  name: "app",
  components: {
    Navbar,
    Images,
    AddPhoto,
  },
  data() {
    return {
      modal,
      storeItems,
      isLoading: true,
    };
  },
  mounted() {
    storeItems.loadItems().then(() => {
      this.isLoading = false;
    });
  },
};
</script>
