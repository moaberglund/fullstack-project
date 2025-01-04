<template>
  <section>
    <div class="block container">
      <div class="row">
      </div>

      <div class="row">
        <div class="col-12 col-md-4 col-lg-3 m-4" v-for="category in uniqueCategories" :key="category">
          <div class="card text-center p-3 shadow-sm">
            <div class="rounded mx-auto mb-3" :style="{
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
            }"></div>
            <!-- Länk till den dynamiska sidan med kategori -->
            <nuxt-link class="linkColor" :to="`/${category}`">{{ category }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router"; // Importera useRouter

export default {
  setup() {
    // Använd useRouter för navigation
    const router = useRouter();

    // State to store beverages
    const beverages = ref([]);
    const uniqueCategories = computed(() => {
      const categories = beverages.value.map(
        (beverage) => beverage.category
      );
      return [...new Set(categories)];
    });

    // Fetch beverages from the server
    const fetchBeverages = async () => {
      try {
        const response = await fetch('/api/beverages');
        const data = await response.json();
        beverages.value = data; // Store beverages in the reactive state
      } catch (error) {
        console.error("Error fetching beverages:", error);
      }
    };

    // Fetch beverages on component mount
    onMounted(() => {
      fetchBeverages();
    });


    return {
      uniqueCategories,

    };
  },
};
</script>

<style scoped>
section {
  height: 79vh;
}

.linkColor {
  color: #26453E;
  text-decoration: none;
}
</style>
