<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../components/navbar/NavBar.vue";
export default {
  components: { Navbar },

  methods: {
    logoutHandler() {
      localStorage.clear;
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
