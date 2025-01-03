<template>
    <section>
        <div class="block">
            <h1>{{ beverage.name }} Details</h1>
            <p><strong>Category:</strong> {{ beverage.category }}</p>
            <p><strong>Subcategory:</strong> {{ beverage.subcategory }}</p>
            <p><strong>Description:</strong> {{ beverage.description }}</p>
            <p><strong>Price:</strong> ${{ beverage.price }}</p>
            <!-- Lägg till mer information här -->
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
        const id = route.params.id; // Dynamisk parameter
        const beverageStore = useBeverageStore();

        // Filtrera drycken baserat på id
        const beverage = computed(() => {
            return beverageStore.beverages.find(beverage =>
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
