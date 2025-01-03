<template>
 <section>
    <div class="block container">
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h1>{{ category }} - {{ subcategory }} Subcategory</h1>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-4 col-lg-3 mb-3"
          v-for="beverage in filteredBeverages"
          :key="beverage._id"
        >
          <div class="card text-center p-3 shadow-sm">
            <div
              class="rounded mx-auto mb-3"
              :style="{
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
              }"
            ></div>
            <!-- Länk till den detaljerade sidan för drycken -->
            <nuxt-link :to="`/${category}/${subcategory}/${beverage._id}`">
              {{ beverage.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from 'vue-router';
import { useBeverageStore } from '~/stores/beverageStore';

export default {
    setup() {
        const route = useRoute();
        const category = route.params.category;
        const subcategory = route.params.subcategory;
        const beverageStore = useBeverageStore();

        // Filtrera drycker baserat på kategori och subkategori
        const filteredBeverages = computed(() => {
            return beverageStore.beverages.filter(beverage =>
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

<style scoped></style>
