<template>
    <section class="p-5">
        <div class="block">
            <!-- Visa dryckens information om den hittades -->
            <BeverageBubble v-if="beverage" :name="beverage.name" :producer="beverage.producer" :year="beverage.year"
                :country="beverage.country" :region="beverage.region" :volume="beverage.volume"
                :alcohol_by_volume="beverage.alcohol_by_volume" :price="beverage.price"
                :description="beverage.description" :shelf_id="beverage.shelf_id" :amount="beverage.shelf_amount" />
            <!-- Visa meddelande om drycken inte hittades -->
            <p v-else>Dryck ej hittad</p>
        </div>
    </section>
</template>

<script>
import { useRoute } from "vue-router";
import { useBeverageStore } from "~/stores/beverageStore";
import BeverageBubble from "~/components/BeverageBubble.vue";
import { computed, onMounted } from "vue";

export default {
    components: { BeverageBubble },
    setup() {
        const route = useRoute();
        const id = route.params._id; // Hämta id från URL:en
        const beverageStore = useBeverageStore();

        // Vänta på att dryckerna är laddade
        onMounted(() => {
            if (beverageStore.beverages.length === 0) {
                beverageStore.fetchBeverages();  // Hämta drycker om de inte är laddade
            }
        });

        // Hämta drycken baserat på id
        const beverage = computed(() => {
            return beverageStore.getBeverageById(id);  // Använd getter från store för att hämta drycken
        });

        return {
            beverage,
        };
    },
};
</script>


<style scoped></style>
