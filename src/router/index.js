import { createRouter, createWebHistory } from "vue-router";
import HelloOtus from "../views/HelloOtus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "hello-otus",
      component: HelloOtus,
    },
    {
      path: "/todoc",
      name: "todoc",
      component: () => import("../views/TodoAppView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../views/TodoApp.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
