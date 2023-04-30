<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light mb-4 border-bottom">
      <router-link
        :to="routes[0].path"
        class="navbar-brand d-flex align-items-center text-dark text-decoration-none"
      >
      </router-link>
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li
            class="nav-item text-uppercase"
            v-for="route in routes"
            :key="route.path"
          >
            <router-link
              :to="route.path"
              class="nav-link"
              :title="route.name"
              :class="{ active: isActive(route.path) }"
            >
              <i class="bi bi-house-fill" v-if="route.path === '/starter'"></i>
              {{ route.path !== "/starter" ? route.name : "" }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { routes as rts } from "../router";

const routes = rts;

const router = useRouter();
const activeRoute = computed(() => router.currentRoute.value.path);
const isActive = (path) => path === activeRoute.value;
</script>

<style lang="scss" scoped>
$blc: #000;
$lblc: rgba($blc, 0.65);

a {
  text-decoration: none;
  color: $lblc;
  transition: all 0.25s;
}

ul {
  list-style: none;
}
</style>
