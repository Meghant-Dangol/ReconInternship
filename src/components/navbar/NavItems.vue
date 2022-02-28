<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="{ name: navName }">{{
      navName
    }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["navName", "mode"],
  data() {
    return {};
  },
};
</script>

<style></style>
