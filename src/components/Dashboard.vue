<template>
  <div class="container">
    <h2>Dashboard {{ username }}</h2>
    <table class="col-md-2">
      <tr>
        <td class="px-2">Total Balance</td>
        <td class="px-2">{{ totalBalance }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.username,
      totalBalance:
        localStorage.totalBalance === undefined ? 0 : localStorage.totalBalance,
    };
  },
  methods: {
    logoutHandler() {
      localStorage.clear;
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
