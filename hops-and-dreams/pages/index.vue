<template>
  <section>
    <div class="block">
      <h1>
        Welcome to your Web App!
      </h1>
      <button @click="logout">Logout
      </button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    logout() {
      // Remove the auth token from localStorage
      localStorage.removeItem("authToken");
      // Redirect the user to the login page
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped></style>