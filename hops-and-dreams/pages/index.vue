<template>
  <section>
    <div class="block">
      <h1>
        Welcome to your Web App!
      </h1>
      <button @click="logout">Logout</button>
      <!-- Visa API-data -->
      <div v-if="beverages.length">
        <h2>Available Beverages</h2>
        <ul>
          <li v-for="beverage in beverages" :key="beverage.id">
            {{ beverage.name }} - {{ beverage.description }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Loading beverages...</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      beverages: [], // För att lagra data från API:t
    };
  },
  methods: {
    async fetchBeverages() {
      try {
        const response = await fetch('/api/beverages');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        this.beverages = await response.json();
      } catch (error) {
        console.error("Error fetching beverages:", error);
      }
    },
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.fetchBeverages(); // Hämta data när komponenten monteras
  },
};
</script>

<style scoped></style>
