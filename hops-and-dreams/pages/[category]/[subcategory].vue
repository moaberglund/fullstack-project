<template>
    <section>
        <div class="block">
            <h1>{{ category }} - {{ subcategory }} Subcategory</h1>
            <ul>
                <li v-for="beverage in filteredBeverages" :key="beverage.id">
                    {{ beverage.name }}
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