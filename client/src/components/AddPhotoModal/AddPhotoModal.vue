<template>
  <div class="modal">
    <div class="Titulo">
      <span>Add a new Photo</span>
      <div class="Close rounded-circle" @click="modal.closeModal"><div>x</div></div>
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
            required
          />
        </div>
      </div>
    </div>
    <div class="Buttons">
      <button class="CancelButton" type="button" @click="modal.closeModal">
        Cancel
      </button>
      <button class="SubmitButton" type="submit">Submit</button>
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
  },
};
</script>
