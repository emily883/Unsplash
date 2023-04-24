<template>
  <div class="Modal">
    <div class="Titulo"><span>Add a new Photo</span></div>

    <div class="Label">
      <span class="LabelText">Label</span>
      <div class="LabelInput">
        <input class="InputLabel" type="name" required />
      </div>
    </div>
    <div class="PhotoUrl">
      <div class="PhotoUrlText">Photo URL</div>
      <div class="PhotoUrlInput">
        <input class="InputPhoto" type="text" required />
      </div>
    </div>
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
import { storeItems } from "../../store";

export default {
  name: "AddModal",
  data() {
    return {
      storeItems,
    };
  },
};
</script>
