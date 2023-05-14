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
    <div v-if="Error" class="d-flex justify-content-center">
      <Alert :message="Error"/>
    </div>
    <div class="body-container d-flex justify-content-center">
      <div
        v-if="isLoading"
        class="spinner-grow custom-spiner"
        role="status"
        style="width: 3rem; height: 3rem"
      >
        <!-- <span class="sr-only"></span> -->
      </div>
      <div v-else>
        <Images
          v-if="Photos"
          :items="Photos"
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
import Alert from "./components/Alert/Alert.vue";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "app",
  components: {
    Navbar,
    Images,
    AddModal,
    Alert,
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

    // Every Time the getLoading change, the reactive variable change too, and updating the data in the dom | Using the computed function |
    const isLoading = computed(() => {
      return store.getters.getLoading;
    });

    const ModalStatus = computed(() => {
      return store.getters.getModal;
    });

    const Photos = computed(() => {
      return store.getters.getItems;
    });

    const Error = computed(() => {
      return store.getters.getError;
    })

    return {
      isLoading,
      ModalStatus,
      Photos,
      SearchTerm,
      Error
    };
  },
};
</script>
