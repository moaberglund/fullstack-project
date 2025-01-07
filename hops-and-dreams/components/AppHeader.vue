<template>
  <header class="p-2">
    <div class="container p-3">
      <div class="d-flex justify-content-between">
        <div id="left-header">
          <h1 class="darkgreen">Inventory</h1>

          <div class="input-wrapper">
            <i class="bi bi-search"></i>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search for beverages"
              @input="handleSearch"
            />
            <!-- Visa dropdownen endast om searchQuery inte är tom -->
            <ul
              v-if="searchQuery && filteredBeverages.length > 0"
              class="dropdown-list"
            >
              <li v-for="(beverage, index) in filteredBeverages" :key="index">
                <!-- Använd nuxt-link för att göra drycken klickbar och länka till rätt sida -->
                <nuxt-link
                  :to="`/${beverage.category}/${beverage.subcategory}/${beverage._id}`"
                  class="dropdown-item"
                  @click="clearSearch"
                >
                  {{ beverage.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="right-header">
          <button @click="logout" id="btn-logout" class="btn m-3">
            <i class="bi bi-box-arrow-right h1"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Header",
  setup() {
    // Använd useRouter för navigation
    const router = useRouter();
    // Sökord
    const searchQuery = ref("");

    // Listan på drycker som hämtar från server
    const beverages = ref([]);

    // Filtrerad lista baserat på sökningen
    const filteredBeverages = ref([]);

    // Funktion för att hämta drycker från en API eller annan datakälla
    const fetchBeverages = async () => {
      try {
        const response = await fetch("/api/beverages");
        const data = await response.json();
        beverages.value = data; // Sätt dryckerna till den hämtade listan
        filteredBeverages.value = beverages.value;
      } catch (error) {
        console.error("Error fetching beverages:", error);
      }
    };

    // Funktion för att hantera sökningen
    const handleSearch = () => {
      if (searchQuery.value === "") {
        filteredBeverages.value = beverages.value; // Återställ till alla drycker om inget sökord
      } else {
        filteredBeverages.value = beverages.value.filter((beverage) =>
          beverage.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
    };

    // Funktion för att tömma sökfältet när ett resultat klickas
    const clearSearch = () => {
      searchQuery.value = "";
    };

    // Hämta drycker onMount
    onMounted(() => {
      fetchBeverages();
    });

    // Logout function
    const logout = () => {
      localStorage.removeItem("authToken"); // Ta bort authToken från localStorage
      router.push("/login");
    };

    return {
      searchQuery,
      filteredBeverages,
      handleSearch,
      clearSearch,
      logout,
    };
  },
};
</script>

<style scoped>
header {
  border-radius: 0 0 25px 25px;
  background-color: #fff9ef;
}

.darkgreen {
  color: #26453e;
}

.input-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px;
}

.input-wrapper i {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
}

input {
  width: 100%;
  padding: 1em 1em 1em 2.5em;
  border-radius: 25px;
  background-color: #ededed;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1rem;
}

input::placeholder {
  color: #aaa;
}

/* Dropdown-stilar */
.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  box-sizing: border-box;
  margin-top: 5px;
  padding: 0;
  list-style-type: none;
  z-index: 9999;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

#btn-logout {
  border: none;
}
</style>
