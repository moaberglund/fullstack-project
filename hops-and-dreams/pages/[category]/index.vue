<template>
    <section>
        <div class="block">
            <h1>{{ category }} Category</h1>

            <!-- Lista över subkategorier som finns i den valda kategorin -->
            <ul>
                <li v-for="subcategory in uniqueSubcategories" :key="subcategory">
                    <!-- Länk till subkategori-sidan -->
                    <nuxt-link :to="`/${category}/${subcategory}`">{{ subcategory }}</nuxt-link>
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
        const beverageStore = useBeverageStore();

        // Filtrera drycker baserat på kategori
        const filteredBeverages = computed(() => {
            return beverageStore.beverages.filter(beverage => beverage.category === category);
        });

        // Hämta unika subkategorier baserat på dryckerna i den valda kategorin
        const uniqueSubcategories = computed(() => {
            const subcategories = filteredBeverages.value.map((beverage) => beverage.subcategory);
            return [...new Set(subcategories)];
        });

        return {
            category,
            uniqueSubcategories,
        };
    },
};
</script>

<style scoped></style>