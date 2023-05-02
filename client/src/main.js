import { createApp } from "vue";
import App from "./App.vue";
// import "Bootstrap"
import "../src/scss/styles.scss";
import VueLazyload from 'vue-lazyload'

let app = createApp(App);

app.use(VueLazyload, {
    lazyComponent: true
  });

app.mount("#app");
