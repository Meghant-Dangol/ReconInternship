<template>
  <div class="container">
    <h2 class="text-center">Login Form</h2>
    <form
      action=""
      @submit.prevent.stop="loginHandler"
      class="form col-md-4 mx-auto"
    >
      <div class="form-group my-4">
        <label for="username" class="form-label">Username</label>
        <input type="text" v-model="username" class="form-control" />
      </div>
      <div class="form-group my-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" />
      </div>
      <input type="submit" value="Login" class="btn btn-success mt-3" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    loginHandler() {
      localStorage.username = this.username;
      this.$emit("loggedIn");
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style></style>
