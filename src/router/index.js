import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/index.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hello",
    name: "hello",
    component: () => import("../components/HelloWorld.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
