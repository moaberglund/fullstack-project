<template>
    <section>
        <div>
            <Breadcrumbs />
        </div>
        <div class="block container">
            <div class="row">

            </div>

            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 mb-3" v-for="subcategory in uniqueSubcategories"
                    :key="subcategory">
                    <div class="card text-center p-3 shadow-sm">
                        <div class="rounded mx-auto mb-3" :style="{
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
                        }"></div>
                        <!-- Länk till subkategori-sidan -->
                        <nuxt-link :to="`/${category}/${subcategory}`">{{ subcategory }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router';
import { useBeverageStore } from '~/stores/beverageStore';
import Breadcrumbs from "~/components/Breadcrumbs.vue";

export default {
    components: { Breadcrumbs },
    setup() {
        const route = useRoute();
        const category = route.params.category; // Hämta den dynamiska kategoriparametern
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
