import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBeverageStore = defineStore('beverageStore', () => {
    const beverages = ref([]);

    // Load beverages from localStorage (if available)
    if (localStorage.getItem('beverages')) {
        beverages.value = JSON.parse(localStorage.getItem('beverages'));
    }

    // Function to fetch beverages
    const fetchBeverages = async () => {
        try {
            const response = await fetch('/api/beverages');
            const data = await response.json();
            beverages.value = data;
            localStorage.setItem('beverages', JSON.stringify(data)); // Save to localStorage
        } catch (error) {
            console.error('Error fetching beverages:', error);
        }
    };

    // Add a getter to fetch a specific beverage by its ID
    const getBeverageById = (id) => {
        return beverages.value.find(beverage => beverage._id === id);
    };

    return {
        beverages,
        fetchBeverages,
        getBeverageById, // Make sure to return the getter
    };
});
