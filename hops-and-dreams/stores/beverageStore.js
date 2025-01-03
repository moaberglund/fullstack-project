// stores/beverageStore.js
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

    return {
        beverages,
        fetchBeverages
    };
});
