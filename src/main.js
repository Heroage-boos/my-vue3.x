import { createApp } from "vue";
import { ElButton } from "element-plus";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$ELEMENT = {
  // options
};
app.use(ElButton);
