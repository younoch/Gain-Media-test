import { createApp } from "vue";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createPinia } from 'pinia'

import App from "@/App.vue";
import router from "@/router";

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)

app.use(router);
app.mount("#app");
