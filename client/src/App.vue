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
    <div v-if="storeItems.isLoading">Cargando Fotos</div>
    <div v-else>
      <Images
        v-if="storeItems.items"
        :items="storeItems.items.reverse()"
        :searchTerm="storeItems.SearchTerm"
        class="images"
      />
    </div>
  </div>
</template>

<style src="./App.modules.css"></style>

<script>
import Images from "./components/Images/Images.vue";
import Navbar from "./components/NavBar/Navbar.vue";
import AddPhoto from "./components/AddPhotoModal/AddPhotoModal.vue";
import { storeItems, modal } from "./store";
const { loadItems } = storeItems;

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
    };
  },
  beforeMount() {
    loadItems();
  },
};
</script>
