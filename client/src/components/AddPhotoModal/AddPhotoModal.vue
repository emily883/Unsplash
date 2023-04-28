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
            @change="OnChange($event)"
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
            @change="OnChange($event)"
            required
          />
        </div>
      </div>
      <div class="Buttons">
        <button class="CancelButton" @click="modal.closeModal">Cancel</button>
        <button class="SubmitButton" @click="">Submit</button>
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
import { modal } from "../../store";

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
      console.log(this.data);
      modal.closeModal();
    },
    OnChange(event) {
      this.data[event.target.name] = event.target.value;
    },
  },
};
</script>
