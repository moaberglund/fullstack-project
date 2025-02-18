<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
                <!-- Om det är den sista breadcrumb, visa bara namnet -->
                <span v-if="index === breadcrumbs.length - 1">
                    {{ crumb.name }}
                </span>
                <!-- Annars gör den till en länk -->
                <nuxt-link v-else :to="crumb.link">
                    {{ crumb.name }}
                </nuxt-link>
            </li>
        </ol>
    </nav>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";

export default {
    setup() {
        const route = useRoute();
        const beverages = ref([]);
        
        // Funktion för att hämta drycker från servern
        const fetchBeverages = async () => {
            try {
                const response = await fetch('/api/beverages');
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

        // Bygg breadcrumbs
        const breadcrumbs = computed(() => {
            const parts = route.path.split("/").filter((part) => part); // Dela upp i delar och ta bort tomma
            const links = parts.map((_, i) => "/" + parts.slice(0, i + 1).join("/")); // Bygg dynamiska länkar

            // Bygg dynamiska crumbs
            const dynamicCrumbs = parts.map((part, i) => {
                if (i === parts.length - 1) {
                    // Här söker vi om vi har en dryck som matchar id
                    const beverage = beverages.value.find((b) => b._id === part);
                    return {
                        name: beverage ? beverage.name : part,  // Använd dryckens namn om den finns
                        link: links[i],
                    };
                }
                return {
                    name: decodeURIComponent(part), // Dekoda URL-komponenter
                    link: links[i],
                };
            });

            // Lägg till Home som första breadcrumb
            return [
                { name: "Home", link: "/" },
                ...dynamicCrumbs,
            ];
        });

        return {
            breadcrumbs,
        };
    },
};
</script>

<style scoped>
.breadcrumb-item i {
    color: #6c757d;
    /* Anpassa färg om nödvändigt */
}
a {
    color: #26453E;
    text-decoration: none;
}
</style>
