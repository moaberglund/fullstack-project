<template>
  <section>
    <div class="block">
      <BeverageBubble
        v-if="beverage"
        :name="beverage.name"
        :producer="beverage.producer"
        :year="beverage.year"
        :country="beverage.country"
        :region="beverage.region"
        :volume="beverage.volume"
        :alcohol_by_volume="beverage.alcohol_by_volume"
        :price="beverage.price"
        :description="beverage.description"
        :shelf_id="beverage.shelf_id"
        :amount="beverage.amount"
      />
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { useBeverageStore } from "~/stores/beverageStore";
import BeverageBubble from "~/components/BeverageBubble.vue";
import { computed } from "vue";

export default {
  components: { BeverageBubble },
  setup() {
    const route = useRoute();
    const category = route.params.category;
    const subcategory = route.params.subcategory;
    const id = route.params.id; // Dynamisk parameter
    const beverageStore = useBeverageStore();

    // Filtrera drycken baserat på id
    const beverage = computed(() => {
      return beverageStore.beverages.find(
        (beverage) =>
          beverage.category === category &&
          beverage.subcategory === subcategory &&
          beverage.id === id
      );
    });

    return {
      beverage,
    };
  },
};
</script>

<style scoped></style>
