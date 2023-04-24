<template>
  <div :key="image.id" @mouseenter="hover = true" @mouseleave="hover = false">
    <div>
      <div class="hover" v-show="hover">
        <button id="DeleteButton">delete</button>
        <span class="ImageLabel">{{ image.label }}</span>
      </div>
      <img
        :src="image.image"
        class="card-img custom-Img"
        alt="Imagen {{ index }}"
      />
    </div>
  </div>
</template>

<style scoped>
.hover {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.38);
  border-radius: 16px;
}

#DeleteButton {
  color: #eb5757;
  background: transparent;
  border-color: #eb5757;
  width: 3.5vw;
  height: 2vw;
  white-space: nowrap;
  border: 1px solid #eb5757;
  border-radius: 38px;
  align-self: flex-end;
  margin: 1vw 1vw 0vw 0vw;
}

.ImageLabel {
  font-family: "Montserrat";
  font-style: normal;
  color: #ffff;
  font-weight: 700;
  margin: 0vw 0.5vw 1.5vw 1vw;
  line-height: 22px;
}

.custom-Img {
  border: none;
  border-radius: 16px;
}
</style>

<script>
export default {
  name: "cards",
  props: {
    image: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
