<template>
    <section>
        <div class="block">
            <h1>{{ category }} Category</h1>
            <ul>
                <li v-for="beverage in filteredBeverages" :key="beverage.id">
                    {{ beverage.subcategory }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router';
import { useBeverageStore } from '~/stores/beverageStore';

export default {
    setup() {
        const route = useRoute();
        const category = route.params.category; // Dynamisk parameter
        const beverageStore = useBeverageStore();

        // Filtrera drycker baserat på kategori
        const filteredBeverages = computed(() => {
            return beverageStore.beverages.filter(beverage => beverage.category === category);
        });

        return {
            category,
            filteredBeverages,
        };
    },
};
</script>

<style scoped></style>