<template>
  <section>
    <div class="block container">
      <div class="p-2">
        <Breadcrumbs />
      </div>
      <div class="row"></div>

      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 mt-3"
          v-for="subcategory in uniqueSubcategories"
          :key="subcategory"
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
            <!-- Länk till subkategori-sidan -->
            <nuxt-link class="linkColor" :to="`/${category}/${subcategory}`">{{
              subcategory
            }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";

export default {
  components: { Breadcrumbs },
  setup() {
    const route = useRoute();
    const category = route.params.category; // Hämta den dynamiska kategoriparametern

    // State to store beverages
    const beverages = ref([]);
    const uniqueSubcategories = computed(() => {
      const subcategories = beverages.value
        .filter((beverage) => beverage.category === category)
        .map((beverage) => beverage.subcategory);
      return [...new Set(subcategories)];
    });

    // Fetch beverages from the server
    const fetchBeverages = async () => {
      try {
        const response = await fetch("/api/beverages");
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
      category,
      uniqueSubcategories,
    };
  },
};
</script>

<style scoped>
.linkColor {
  color: #26453e;
  text-decoration: none;
}
</style>
