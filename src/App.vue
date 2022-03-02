<template>
  <NavBar />
  <router-view />
</template>

<script>
import LoginForm from "./components/login/LoginForm.vue";
import NavBar from "./components/navbar/NavBar.vue";
export default {
  components: { LoginForm, NavBar },
  data() {
    return {};
  },
};
</script>

<style></style>
