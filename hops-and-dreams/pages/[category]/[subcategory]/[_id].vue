<template>
  <section>
    <div class="block container">
      <div class="p-2">
        <Breadcrumbs />
      </div>

      <!-- Visa dryckens information om den hittades -->
      <BeverageBubble
        v-if="beverage"
        :id="beverage._id"
        :name="beverage.name"
        :producer="beverage.producer"
        :year="beverage.year"
        :country="beverage.country"
        :region="beverage.region"
        :volume="beverage.volume"
        :alcohol_by_volume="beverage.alcohol_by_volume"
        :price="beverage.price"
        :description="beverage.description"
        :organic="beverage.organic"
        :vegan="beverage.vegan"
        :shelf_id="beverage.shelf_id"
        :amount="beverage.shelf_amount"
      />
      <!-- Visa meddelande om drycken inte hittades -->
      <p v-else>Dryck ej hittad</p>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import BeverageBubble from "~/components/BeverageBubble.vue";
import Breadcrumbs from "~/components/Breadcrumbs.vue";

export default {
  components: { Breadcrumbs, BeverageBubble },
  setup() {
    const route = useRoute();
    const id = route.params._id; // Hämta id från URL:en
    const beverage = ref(null); // Skapa en reaktiv variabel för drycken

    // Funktion för att hämta drycken från servern
    const fetchBeverage = async () => {
      try {
        const response = await fetch(`/api/beverages/${id}`);
        const data = await response.json();
        beverage.value = data; // Tilldela den hämtade drycken
      } catch (error) {
        console.error("Error fetching beverage:", error);
      }
    };

    // Hämta drycken när komponenten mountas
    onMounted(() => {
      fetchBeverage();
    });

    return {
      beverage,
    };
  },
};
</script>

<style scoped>
</style>
