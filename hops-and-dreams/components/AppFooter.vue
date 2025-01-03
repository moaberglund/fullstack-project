<template>
  <footer>
    <button @click="home" id="btn-home">Home</button>
    <button id="btn-back">Back</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    home() {
      // Redirect the user to the home page
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
footer {
  background-color: #ececec;
  border-radius: 25px 25px 0 0;
}
</style>