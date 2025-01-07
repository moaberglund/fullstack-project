<template>
  <div class="card beverage-bubble mx-auto p-3 mt-3 mb-5">
    <div class="beverage-img bg-light rounded"></div>

    <div class="card-body beverage-text">
      <h1 class="productname card-title h4">{{ name }}</h1>

      <h2 class="h6 text-muted">{{ producer }}, {{ year }}</h2>

      <h3 class="h6 text-muted">{{ country }}, {{ region }}</h3>
      <h3 class="h6 text-muted">
        {{ volume }} ml - {{ alcohol_by_volume }}% vol.
      </h3>

      <p class="price h4">&euro;{{ price }}</p>

      <p class="description text-muted">{{ description }}</p>

      <div class="certification mb-3 d-flex">
        <EcoCert v-if="organic" />
        <VeganCert v-if="vegan" />
      </div>

      <!-- visa cert om det finns för drycken -->
      <p class="shelf text-muted">Shelf: {{ shelf_id }}</p>

      <div class="amount">
        <p class="m-0">Amount:</p>
        <div class="input-group amount">
          <button
            id="minusTen"
            @click="updateAmount(-10)"
            class="btn btn-outline-secondary"
          >
            - 10
          </button>

          <button
            id="minusOne"
            @click="updateAmount(-1)"
            class="btn btn-outline-secondary px-3"
          >
            -
          </button>

          <p class="m-0 px-3 amount-btn">{{ currentAmount }}</p>

          <button
            id="plusOne"
            @click="updateAmount(1)"
            class="btn btn-outline-secondary px-3"
          >
            +
          </button>
          <button
            id="plusTen"
            @click="updateAmount(10)"
            class="btn btn-outline-secondary"
          >
            + 10
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeverageBubble",
  props: {
    id: String,
    name: String,
    producer: String,
    year: Number,
    country: String,
    region: String,
    volume: Number,
    alcohol_by_volume: Number,
    price: Number,
    description: String,
    organic: Boolean,
    vegan: Boolean,
    shelf_id: Number,
    amount: Number,
  },
  data() {
    return {
      currentAmount: this.amount, // Hantera aktuell mängd lokalt
    };
  },
  methods: {
    async updateAmount(change) {
      const newAmount = this.currentAmount + change;

      if (newAmount < 0) {
        alert("Amount cannot be negative!");
        return;
      }

      try {
        const response = await fetch(`/api/beverages/${this.id}`, {
          method: "PUT",
          body: JSON.stringify({ shelf_amount: newAmount }), // Skicka data som JSON
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          // Uppdatera amount lokalt om PUT-anropet lyckas
          this.currentAmount = newAmount;
        } else {
          console.error("Failed to update amount:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating amount:", error);
      }
    },
  },
};
</script>

<style scoped>
.beverage-bubble {
  width: 350px;
  height: auto;
}

.beverage-img {
  width: 100%;
  height: 280px;
}

.productname {
  color: #26453e;
}

h3 {
  font-size: 12px;
}

.price {
  color: #26453e;
}

.description {
  font-size: 12px;
}

.amount-btn {
  width: 70px;
  padding-top: 5px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

#minusTen {
  background-color: #f8d9c4;
  color: black;
}

#minusOne {
  background-color: #ffeee1;
  color: black;
}

#plusOne {
  background-color: #e3fce9;
  color: black;
}
#plusTen {
  background-color: #d4edda;
  color: black;
}

#minusTen:hover {
  background-color: rgb(211, 211, 211);
}
#minusOne:hover {
  background-color: rgb(211, 211, 211);
}
#plusTen:hover {
  background-color: rgb(211, 211, 211);
}
#plusOne:hover {
  background-color: rgb(211, 211, 211);
}
</style>
