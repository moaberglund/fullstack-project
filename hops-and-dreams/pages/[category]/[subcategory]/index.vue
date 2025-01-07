<template>
  <section>
    <div class="block container">
      <div class="p-2">
        <Breadcrumbs />
      </div>
      <div class="row"></div>

      <div class="row">
        <div class="col-6 col-md-4 col-lg-3 mt-3" v-for="beverage in filteredBeverages" :key="beverage._id">
          <!-- Länk till den detaljerade sidan för drycken -->
          <nuxt-link class="linkColor" :to="`/${category}/${subcategory}/${beverage._id}`">
            <div class="card text-center p-3 shadow-sm">
              <div class="rounded mx-auto mb-3" :style="{
                width: '100px',
                height: '100px',
                backgroundColor:
                  beverage.category === 'Wine'
                    ? '#f8d7da'
                    : beverage.category === 'Beer'
                      ? '#d4edda'
                      : beverage.category === 'Cider'
                        ? '#FAEDCB'
                        : beverage.category === 'Mixed Drinks'
                          ? '#D5C8E9'
                          : beverage.category === 'Spirits'
                            ? '#F8D9C4'
                            : '#cce5ff',
              }"></div>

              <p>{{ beverage.name }}</p>

            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";

export default {
  components: { Breadcrumbs },
  setup() {
    const route = useRoute();
    const category = route.params.category;
    const subcategory = route.params.subcategory;
    const beverages = ref([]);

    // Funktion för att hämta drycker från servern
    const fetchBeverages = async () => {
      try {
        const response = await fetch("/api/beverages");
        const data = await response.json();
        beverages.value = data;
      } catch (error) {
        console.error("Error fetching beverages:", error);
      }
    };

    // Hämta drycker när komponenten mountas
    onMounted(() => {
      fetchBeverages();
    });

    // Filtrera drycker baserat på kategori och subkategori
    const filteredBeverages = computed(() => {
      return beverages.value.filter(
        (beverage) =>
          beverage.category === category && beverage.subcategory === subcategory
      );
    });

    return {
      category,
      subcategory,
      filteredBeverages,
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
