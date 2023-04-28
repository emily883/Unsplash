<template>
  <div class="Modal">
    <div class="Titulo"><span>Add a new Photo</span></div>
    <form @submit.prevent="submit">
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
      <div class="Buttons">
        <button class="CancelButton" type="button" @click="modal.closeModal">Cancel</button>
        <button class="SubmitButton" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.Modal {
  position: absolute;
  display: flex;
  width: 35vw;
  height: 40vh;
  background-color: red;
  flex-direction: column;
}
</style>

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
