import { createApp } from 'vue'
import App from './App.vue'
import UiImageListComponents from 'balm-ui/components/image-list';

let app = createApp(App)
app.use(UiImageListComponents);
app.mount('#app')

