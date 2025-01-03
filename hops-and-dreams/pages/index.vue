<template>
  <section>
    <div class="block">
      <h1>Welcome to your Web App!</h1>
      <button @click="logout">Logout</button>
      <ul>
        <li v-for="beverage in beverages" :key="beverage.id">{{ beverage.name }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async setup() {
    const { data: beverages } = await useFetch('/api/beverages');
    return { beverages };
  },
  methods: {
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/login");
    },
  },
}
</script>


<style scoped></style>