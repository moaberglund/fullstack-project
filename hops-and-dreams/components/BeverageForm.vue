<template>
  <form @submit.prevent="submitForm">
    <h1>Add new beverage:</h1>
    <label for="category">Category:</label>
    <select id="category" v-model="beverage.category">
      <option value="" disabled>Select a category</option>
      <option
        v-for="(subcategories, category) in categories"
        :key="category"
        :value="category"
      >
        {{ category }}
      </option>
    </select>

    <label for="subcategory">Subcategory:</label>
    <select
      id="subcategory"
      v-model="beverage.subcategory"
      :disabled="!filteredSubcategories.length"
    >
      <option value="" disabled>Select a subcategory</option>
      <option v-for="sub in filteredSubcategories" :key="sub" :value="sub">
        {{ sub }}
      </option>
    </select>

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="beverage.name" required />

    <label for="producer">Producer:</label>
    <input type="text" id="producer" v-model="beverage.producer" required />

    <label for="country">Country:</label>
    <input type="text" id="country" v-model="beverage.country" required />

    <label for="region">Region:</label>
    <input type="text" id="region" v-model="beverage.region" required />

    <label for="year">Year:</label>
    <input type="number" id="year" v-model="beverage.year" required />

    <label for="volume">Volume (ml):</label>
    <input type="number" id="volume" v-model="beverage.volume" required />

    <label for="alcohol_by_volume">Alcohol by Volume (%):</label>
    <input
      type="number"
      id="alcohol_by_volume"
      v-model="beverage.alcohol_by_volume"
      required
      step="0.1"
    />

    <label for="price">Price (€):</label>
    <input
      type="number"
      id="price"
      v-model="beverage.price"
      required
      step="0.01"
    />

    <label for="description">Description:</label>
    <textarea
      id="description"
      v-model="beverage.description"
      required
    ></textarea>

    <div class="certifications">
      <h2>Certifications:</h2>

      <div class="checkbox-group">
        <div class="checkbox-item">
          <input type="checkbox" id="organic" v-model="beverage.organic" />
          <label for="organic">Organic</label>
        </div>

        <div class="checkbox-item">
          <input type="checkbox" id="vegan" v-model="beverage.vegan" />
          <label for="vegan">Vegan</label>
        </div>
      </div>
    </div>

    <label for="shelf_amount">Shelf Amount:</label>
    <input
      type="number"
      id="shelf_amount"
      v-model="beverage.shelf_amount"
      required
    />

    <label for="shelf_id">Shelf ID:</label>
    <input type="number" id="shelf_id" v-model="beverage.shelf_id" required />

    <button type="submit">Save beverage</button>
  </form>
</template>
  

<script setup>
import { ref, computed } from "vue";

// Kategorier och subkategorier
const categories = ref({
  Wine: ["Red Wine", "White Wine", "Rosé Wine", "Sparkling Wine"],
  Beer: ["Ale", "Sour Beer", "Stout"],
  Cider: ["Sweet", "Dry"],
  "Mixed Drinks": ["Sweet", "Dry"],
  Spirits: ["Whiskey", "Vodka", "Rum", "Gin", "Tequila", "Bitter"],
  "Non-alcoholic": ["Spirits", "Beer", "Wine", "Cider", "Mixed Drinks"],
});

// Reaktivt objekt för dryckesval
const beverage = ref({
  category: "",
  subcategory: "",
  name: "",
  producer: "",
  country: "",
  region: "",
  year: null,
  volume: null,
  alcohol_by_volume: null,
  price: null,
  description: "",
  organic: false,
  vegan: false,
  shelf_amount: null,
  shelf_id: null,
});

// Dynamisk filtrering av subkategorier baserat på vald kategori
const filteredSubcategories = computed(() => {
  return beverage.value.category
    ? categories.value[beverage.value.category] || []
    : [];
});

// Funktion som hanterar formulärets inskick
const submitForm = async () => {
  try {
    const response = await $fetch("/api/beverages/create", {
      method: "POST",
      body: beverage.value, // Skickar hela objektet direkt
    });

    alert("Beverage saved successfully!");
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while saving the beverage.");
  }
};
</script>

<style scoped>
form {
  background: #F4F4F4;
  width: 600px;
  max-width: 100%;
  margin: 1em auto;
  padding: 1em;
  border-radius: 15px;
  line-height: 1.5em;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 16px;
}

h2 {
  font-size: 16px;
}

select {
  padding: 0.5em 1em;
  margin: 0 0 2em 0;
  border-radius: 25px;
  width: 400px;
  max-width: 90%;
  background-color: #ffffff;
  border: none;
}
input {
  padding: 0.5em 0 0.5em 1em;
  margin: 0 0 2em 0;
  border-radius: 25px;
  width: 400px;
  max-width: 90%;
  background-color: #ffffff;
  border: none;
}

textarea {
  padding: 0.5em 0 0.5em 1em;
  margin: 0 0 2em 0;
  border-radius: 25px;
  width: 400px;
  height: 125px;
  max-width: 90%;
  background-color: #ffffff;
}
.certifications {
  margin-bottom: 2em;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.checkbox-item input[type="checkbox"] {
 width: auto;
 margin: 0;
 border-radius: 50%;
 appearance: none;
 width: 16px;
 height: 16px;
 border: 2px solid #26453e;
 cursor: pointer;
}

.checkbox-item input[type="checkbox"]:checked {
 background-color: #26453e;
 position: relative;
}

.checkbox-item input[type="checkbox"]:checked::after {
 content: "✓";
 color: white;
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translate(-50%, -50%);
 font-size: 12px;
}
.checkbox-item label {
  margin: 0;
}

button {
  margin: 2em 0 3em 0;
  padding: 1em;
  border-radius: 15px;
  background-color: #26453e;
  color: #ffffff;
  border: none;
  width: 200px;
  font-size: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #e4ba78;
  color: #26453e;
  box-shadow: 1px 1px 5px black;
}
</style>