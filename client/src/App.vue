<template>
  <div
    v-if="ModalStatus"
    class="modal-container"
    @scroll.prevent
    @wheel.prevent
    @touchmove.prevent
  >
    <AddModal class="modal-photo" />
  </div>
  <div class="app-container">
    <Navbar class="nav-bar" @searching="Search" />
    <div class="body-container d-flex justify-content-center">
      <div
        v-if="isLoading"
        class="spinner-grow custom-spiner"
        role="status"
        style="width: 3rem; height: 3rem"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else>
        <Images
          v-if="Items"
          :items="Items"
          :searchTerm="SearchTerm"
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
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    Images,
    AddModal,
  },
  methods: {
    Search(dataInputSearch) {
      this.SearchTerm = dataInputSearch;
    },
  },
  setup() {
    const store = useStore();
    const SearchTerm = ref("");

    onMounted(async () => {
      await store.dispatch("fetchItems");
      store.dispatch("changeIsLoading", false);
    });

    // Every Time the getLoading change, the reactive variable change too | Using the computed function |
    const isLoading = computed(() => {
      return store.getters.getLoading;
    });

    const ModalStatus = computed(() => {
      return store.getters.getModal;
    });

    const Items = computed(() => {
      console.log("detecto un cambio")
      return store.getters.getItems;
    });

    return {
      isLoading,
      ModalStatus,
      Items,
      SearchTerm,
    };
  },
};
</script>
