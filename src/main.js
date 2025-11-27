import { createApp } from "vue";
import AppLayout from "./layout/AppLayout.vue";
import router from "./router";

const app = createApp(AppLayout);
app.use(router);
app.mount("#app");
