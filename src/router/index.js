import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import AppProduct from "@/views/AppProduct.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: { msg: "Bootstrap Modal" },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { layout: "MainLayout" },
  },
  {
    path: "/product",
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
