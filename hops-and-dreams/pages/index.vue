<template>
  <section>
    <div class="block">
      <h1>Welcome to your Web App!</h1>
      <ul>
        <li v-for="category in uniqueCategories" :key="category">
          {{ category }}
        </li>
      </ul>
      <button @click="logout">Logout</button>
    </div>
  </section>
</template>

<script>
import { useBeverageStore } from '~/stores/beverageStore';
import { onMounted, computed } from 'vue';

export default {
  setup() {
    const beverageStore = useBeverageStore();

    // Fetch beverages on component mount
    onMounted(() => {
      if (beverageStore.beverages.length === 0) {
        beverageStore.fetchBeverages();
      }
    });

    // Compute unique categories
    const uniqueCategories = computed(() => {
      const categories = beverageStore.beverages.map(beverage => beverage.category);
      return [...new Set(categories)];
    });

    return {
      uniqueCategories,
    };
  },

  methods: {
    logout() {
      // Remove the auth token from localStorage
      localStorage.removeItem("authToken");
      // Redirect the user to the login page
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
</style>
