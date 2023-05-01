import { createRouter, createWebHistory } from "vue-router";

import AppProduct from "@/views/AppProduct.vue";

export const routes = [
  {
    path: "/",
    name: "Product",
    component: AppProduct,
    meta: { layout: "MainLayout" },
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
