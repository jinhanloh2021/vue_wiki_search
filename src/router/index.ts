import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import App from "../App.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: App, //Have to change in future
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
