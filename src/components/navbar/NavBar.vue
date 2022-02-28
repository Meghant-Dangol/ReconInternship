<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavItems
            v-for="navItem in navItems"
            :navName="navItem"
            :key="navItem"
          />
        </ul>

        <div class="px-2">{{ username }}</div>
        <div class="px-2">
          <button class="btn btn-danger" @click="logoutHandler">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItems from "./NavItems.vue";
import navItemData from "../../data/navItemData";
export default {
  components: { NavItems },
  data() {
    return {
      navItems: navItemData,
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    logoutHandler() {
      localStorage.clear;
      this.username = "";
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
