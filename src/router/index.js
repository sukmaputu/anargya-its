import { createRouter, createWebHashHistory } from "vue-router";

import HomeApp from "../views/HomeApp.vue";
import AboutApp from "../views/AboutApp.vue";

const routes = [
  { path: "/", component: HomeApp },
  { path: "/about", component: AboutApp },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
