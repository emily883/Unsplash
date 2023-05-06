import { createApp } from "vue";
import App from "./App.vue";
// import "Bootstrap"
import "../src/scss/styles.scss";
import VueLazyload from "vue-lazyload";
import store from "./store/index";

let app = createApp(App);

app.use(VueLazyload, {
  lazyComponent: true,
});

app.use(store);

app.mount("#app");
