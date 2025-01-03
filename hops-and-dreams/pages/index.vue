<template>
  <section>
    <div class="block container">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h1>Welcome to your Web App!</h1>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-4 col-lg-3 mb-3"
          v-for="category in uniqueCategories"
          :key="category"
        >
          <div class="card text-center p-3 shadow-sm">
            <div
              class="rounded mx-auto mb-3"
              :style="{
                width: '100px',
                height: '100px',
                backgroundColor:
                  category === 'Wine'
                    ? '#f8d7da'
                    : category === 'Beer'
                    ? '#d4edda'
                    : category === 'Cider'
                    ? '#FAEDCB'
                    : category === 'Mixed Drinks'
                    ? '#D5C8E9'
                    : category === 'Spirits'
                    ? '#F8D9C4'
                    : '#cce5ff',
              }"
            ></div>
            <!-- Länk till den dynamiska sidan med kategori -->
            <nuxt-link :to="`/${category}`">{{ category }}</nuxt-link>
          </div>
        </div>
      </div>
      <button @click="logout">Logout</button>
    </div>
  </section>
</template>


<script>
import { useBeverageStore } from "~/stores/beverageStore";
import { onMounted, computed } from "vue";

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
      const categories = beverageStore.beverages.map(
        (beverage) => beverage.category
      );
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
