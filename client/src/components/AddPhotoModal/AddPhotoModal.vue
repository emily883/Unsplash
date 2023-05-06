<!-- <template>
  <div class="modal">
    <div class="Titulo">
      <span>Add a new Photo</span>
      <div class="Close rounded-circle" @click="modal.closeModal">
        <div>x</div>
      </div>
    </div>

    <div class="Inputs">
      <div class="Label">
        <span class="LabelText">Label</span>
        <div class="LabelInput">
          <input
            class="InputLabel"
            type="name"
            v-model="data.label"
            name="label"
            @blur="scrollDown"
            placeholder="Suspendisse elit massa"
            required
          />
        </div>
      </div>
      <div class="PhotoUrl">
        <div class="PhotoUrlText">Photo URL</div>
        <div class="PhotoUrlInput">
          <input
            class="InputPhoto"
            type="text"
            name="image"
            v-model="data.image"
            @blur="scrollDown"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            required
          />
        </div>
      </div>
    </div>
    <div class="Buttons">
      <button class="CancelButton" type="button" @click="modal.closeModal">
        Cancel
      </button>
      <button class="SubmitButton" type="submit" @click="submit">Submit</button>
    </div>
  </div>
</template>

<style src="./AddPhotoModal.modules.css"></style>

<script>
import { modal, storeItems } from "../../store";

export default {
  name: "AddModal",
  data() {
    return {
      modal,
      data: {},
    };
  },
  methods: {
    submit() {
      storeItems.addItem(this.data);
      modal.closeModal();
    },
    scrollDown() {
      window.scrollTo({
        // Then go to the initial position before the focus
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script> -->

<template>
  <div class="modal">
    <div class="Titulo">
      <span>Add a new Photo</span>
      <div class="Close rounded-circle" @click="close">
        <div>x</div>
      </div>
    </div>

    <div class="Inputs">
      <div class="Label">
        <span class="LabelText">Label</span>
        <div class="LabelInput">
          <input
            class="InputLabel"
            type="name"
            name="label"
            @blur="scrollDown"
            placeholder="Suspendisse elit massa"
            required
          />
        </div>
      </div>
      <div class="PhotoUrl">
        <div class="PhotoUrlText">Photo URL</div>
        <div class="PhotoUrlInput">
          <input
            class="InputPhoto"
            type="text"
            name="image"
            @blur="scrollDown"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            required
          />
        </div>
      </div>
    </div>
    <div class="Buttons">
      <button class="CancelButton" type="button" @click="close">Cancel</button>
      <button class="SubmitButton" type="submit" @click="submit">Submit</button>
    </div>
  </div>
</template>

<style src="./AddPhotoModal.modules.css"></style>

<script setup>
import { useStore } from "vuex";
const store = useStore();

const close = () => {
  store.dispatch("hideModalView");
};
</script>

<script>
export default {
  name: "AddModal",
  data() {
    return {

    };
  },
  methods: {
    scrollDown() {
      window.scrollTo({
        // Then go to the initial position before the focus
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
