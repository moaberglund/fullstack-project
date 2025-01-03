import { defineStore } from 'pinia';

export const useBeverageStore = defineStore("beverageStore", {
    state: () => ({
        beverages: [],
    }),
    actions: {
        async fetchBeverages() {
            try {
                const { data } = await useFetch('/api/beverages');
                this.beverages = data.value || []; // Se till att spara datan i storen
                console.log("Fetched Beverages:", this.beverages); // Kontrollera om datan är korrekt
            } catch (error) {
                console.error("Error fetching beverages:", error);
            }
        },
    },
});
