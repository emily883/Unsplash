<template>
  <div class="modal1">
    <div class="Titulo">
      <span>Add a new Photo</span>
      <div class="Close rounded-circle" @click="close">
        <div>x</div>
      </div>
    </div>

    <form @submit="submit" class="Inputs">
      <div class="Label">
        <span class="LabelText">Label</span>
        <div class="LabelInput">
          <input
            class="InputLabel"
            type="name"
            name="label"
            @blur="scrollDown"
            @input="onChange($event)"
            @keydown.enter="submit"
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
            @input="onChange($event)"
            @keydown.enter="submit"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            required
          />
        </div>
      </div>
    </form>
    <div class="Buttons">
      <button class="CancelButton" type="button" @click="close">Cancel</button>
      <button class="SubmitButton" type="submit" @click="submit">Submit</button>
    </div>
  </div>
</template>

<style src="./AddPhotoModal.modules.css"></style>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import scrollDown from "../../functions";
const store = useStore();
const data = ref({});

const onChange = (event) => {
  data[event.target.name] = event.target.value;
};

const close = () => {
  store.dispatch("hideModalView");
};

const submit = async () => {
  if (!data || !data.label || !data.image) {
    alert("Please make sure that you put all the necesary data");
  } else {
    close();
    await store.dispatch("sendPhoto", data);
  }
};
</script>

<script>
export default {
  name: "AddModal",
};
</script>
