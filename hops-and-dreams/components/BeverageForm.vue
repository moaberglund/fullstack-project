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
    <span v-if="formErrors.name" class="error">{{ formErrors.name }}</span>

    <label for="producer">Producer:</label>
    <input type="text" id="producer" v-model="beverage.producer" required />
    <span v-if="formErrors.producer" class="error">{{
      formErrors.producer
    }}</span>

    <label for="country">Country:</label>
    <input type="text" id="country" v-model="beverage.country" required />
    <span v-if="formErrors.country" class="error">{{
      formErrors.country
    }}</span>

    <label for="region">Region:</label>
    <input type="text" id="region" v-model="beverage.region" required />
    <span v-if="formErrors.region" class="error">{{ formErrors.region }}</span>

    <label for="year">Year:</label>
    <input type="number" id="year" v-model="beverage.year" required />
    <span v-if="formErrors.year" class="error">{{ formErrors.year }}</span>

    <label for="volume">Volume (ml):</label>
    <input type="number" id="volume" v-model="beverage.volume" required />
    <span v-if="formErrors.volume" class="error">{{ formErrors.volume }}</span>

    <label for="alcohol_by_volume">Alcohol by Volume (%):</label>
    <input
      type="number"
      id="alcohol_by_volume"
      v-model="beverage.alcohol_by_volume"
      required
      step="0.1"
    />
    <span v-if="formErrors.alcohol_by_volume" class="error">{{
      formErrors.alcohol_by_volume
    }}</span>

    <label for="price">Price (€):</label>
    <input
      type="number"
      id="price"
      v-model="beverage.price"
      required
      step="0.01"
    />
    <span v-if="formErrors.price" class="error">{{ formErrors.price }}</span>

    <label for="description">Description:</label>
    <textarea
      id="description"
      v-model="beverage.description"
      required
    ></textarea>
    <span v-if="formErrors.description" class="error">{{
      formErrors.description
    }}</span>

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
    <span v-if="formErrors.shelf_amount" class="error">{{
      formErrors.shelf_amount
    }}</span>

    <label for="shelf_id">Shelf ID:</label>
    <input type="number" id="shelf_id" v-model="beverage.shelf_id" required />
    <span v-if="formErrors.shelf_id" class="error">{{
      formErrors.shelf_id
    }}</span>

    <button type="submit">Save beverage</button>

    <!-- Bekräftelsemeddelande -->
    <div
      v-if="saveMessage"
      :class="{
        'success-message': saveMessage.includes('success'),
        'error-message': saveMessage.includes('error'),
      }"
    >
      {{ saveMessage }}
    </div>
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

// Validering
const formErrors = ref({
  name: "",
  producer: "",
  country: "",
  region: "",
  year: "",
  volume: "",
  alcohol_by_volume: "",
  price: "",
  description: "",
  shelf_amount: "",
  shelf_id: "",
});

const validateForm = () => {
  let valid = true;
  // Reset errors first
  for (const field in formErrors.value) {
    formErrors.value[field] = "";
  }

  // Validera namn
  if (!beverage.value.name) {
    formErrors.value.name = "Name is required.";
    valid = false;
  }

  // Validera producent
  if (!beverage.value.producer) {
    formErrors.value.producer = "Producer is required.";
    valid = false;
  }

  // Validera land
  if (!beverage.value.country) {
    formErrors.value.country = "Country is required.";
    valid = false;
  }

  // Validera region
  if (!beverage.value.region) {
    formErrors.value.region = "Region is required.";
    valid = false;
  }

  // Validera år (måste vara ett tal mellan 1900 och aktuellt år)
  const currentYear = new Date().getFullYear();
  if (
    !beverage.value.year ||
    beverage.value.year < 1900 ||
    beverage.value.year > currentYear
  ) {
    formErrors.value.year = `Year must be between 1900 and ${currentYear}.`;
    valid = false;
  }

  // Validera volym
  if (!beverage.value.volume || beverage.value.volume <= 0 || beverage.value.volume > 10000) {
    formErrors.value.volume = "Volume must be a positive number and less than 10'000 ml.";
    valid = false;
  }

  // Validera alkoholhalt (måste vara ett tal mellan 0 och 100)
  if (
    !beverage.value.alcohol_by_volume ||
    beverage.value.alcohol_by_volume <= 0 ||
    beverage.value.alcohol_by_volume > 100
  ) {
    formErrors.value.alcohol_by_volume =
      "Alcohol by volume must be a number between 0 and 100.";
    valid = false;
  }

  // Validera pris
  if (!beverage.value.price || beverage.value.price <= 0 || beverage.value.price > 10000) {
    formErrors.value.price = "Price must be a positive number and can not exceed 10'000.";
    valid = false;
  }

  // Validera hyllantal
  if (!beverage.value.shelf_amount || beverage.value.shelf_amount <= 0) {
    formErrors.value.shelf_amount = "Shelf amount must be a positive number.";
    valid = false;
  }

  // Validera hyll-ID
  if (!beverage.value.shelf_id || beverage.value.shelf_id <= 0) {
    formErrors.value.shelf_id = "Shelf ID must be a positive number.";
    valid = false;
  }

  return valid;
};

// Funktion som hanterar formulärets inskick
const submitForm = async () => {
  // Kolla om validering är rätt
  const isValid = validateForm();
  if (!isValid) {
    return; // Stoppa om formuläret inte är giltigt
  }

  try {
    const response = await $fetch("/api/beverages/create", {
      method: "POST",
      body: beverage.value, // Skickar hela objektet direkt
    });

    saveMessage.value = "Beverage saved successfully!";
    resetForm();

    // Ta bort meddelandet efter 3 sekunder
    setTimeout(() => {
      saveMessage.value = "";
    }, 3000);
  } catch (error) {
    console.error("Error:", error);
    saveMessage.value = "An error occurred while saving the beverage.";

    // Ta bort meddelandet efter 3 sekunder
    setTimeout(() => {
      saveMessage.value = "";
    }, 3000);
  }
};

// För att nollställa formulärdata efter inskick
const resetForm = () => {
  beverage.value = {
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
  };
};

// State för bekräftelsemeddelande
const saveMessage = ref("");
</script>

<style scoped>
form {
  background: #f4f4f4;
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
  margin-top: 2em;
  color: #5A5A5A;
}

h2 {
  font-size: 16px;
}

select {
  padding: 0.5em 1em;
  border-radius: 25px;
  width: 400px;
  max-width: 90%;
  background-color: #ffffff;
  border: none;
}
input {
  padding: 0.5em 0 0.5em 1em;
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

/*  Validerings meddelanden*/
.error {
  color: #f44336; /* Röd för felmeddelanden */
  font-size: 12px;
  margin-top: 0.5em;
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

/** Meddelande div */
.success-message {
  background-color: #4caf50; /* Grön för framgång */
  color: white;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  border-radius: 5px;
}

.error-message {
  background-color: #f44336; /* Röd för fel */
  color: white;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  border-radius: 5px;
}
</style>