<template>
    <nav class="breadcrumbs">
        <ul>
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                <nuxt-link
                    v-if="index !== breadcrumbs.length - 1"
                    :to="breadcrumb.path"
                >
                    {{ breadcrumb.name }}
                </nuxt-link>
                <span v-else>{{ breadcrumb.name }}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
import { useRoute } from "vue-router";
import { useBeverageStore } from "~/stores/beverageStore";

export default {
    setup() {
        const route = useRoute();
        const beverageStore = useBeverageStore();

        // Hämta dryckens namn baserat på ID
        const getBeverageName = (id) => {
            const beverage = beverageStore.beverages.find((bev) => bev._id === id);
            return beverage ? beverage.name : id; // Visa ID som fallback om namn inte hittas
        };

        // Generera breadcrumbs
        const breadcrumbs = route.path
            .split("/") // Dela upp URL i delar
            .filter((part) => part) // Ta bort tomma delar
            .map((part, index, array) => {
                // Generera path och namn
                const path = "/" + array.slice(0, index + 1).join("/");
                let name = decodeURIComponent(part).replace(/%20/g, " ");
                // Om det är sista segmentet, hämta dryckens namn
                if (index === array.length - 1 && array.length > 2) {
                    name = getBeverageName(part);
                }
                return { name, path };
            });

        return { breadcrumbs };
    },
};
</script>

<style scoped>
.breadcrumbs ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
}

.breadcrumbs li {
    font-size: 0.9rem;
}

.breadcrumbs a {
    text-decoration: none;
    color: #007bff;
}

.breadcrumbs a.current,
.breadcrumbs span {
    color: #000; /* Gör nuvarande sida svart */
    font-weight: bold;
    pointer-events: none;
}
</style>
