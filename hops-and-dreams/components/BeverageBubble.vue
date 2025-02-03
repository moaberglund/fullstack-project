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

      <p class="shelf text-muted">Shelf: {{ shelf_id }}</p>

      <div class="amount">
        <p class="m-0">Amount:</p>
        <div class="input-group amount">
          <button @click="updateAmount(-10)" class="btn btn-outline-secondary">
            - 10
          </button>
          <button @click="updateAmount(-1)" class="btn btn-outline-secondary px-3">
            -
          </button>
          <p class="m-0 px-3 amount-btn">{{ currentAmount }}</p>
          <button @click="updateAmount(1)" class="btn btn-outline-secondary px-3">
            +
          </button>
          <button @click="updateAmount(10)" class="btn btn-outline-secondary">
            + 10
          </button>
        </div>
      </div>

      <!-- Papperskorgsikon för att ta bort drycken -->
      <button @click="confirmDelete" class="btn btn-danger mt-3">
        Delete
      </button>
    </div>
  </div>

  <!-- Modal för bekräftelse -->
  <div v-if="showConfirmModal" class="modal-overlay">
    <div class="modal-content">
      <h4>Are you sure you want to delete this beverage?</h4>
      <div class="modal-buttons">
        <button @click="deleteBeverage" class="btn btn-danger">Yes, delete</button>
        <button @click="showConfirmModal = false" class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
  <!-- Modal för bekräftelse av radering -->
  <div v-if="showDeleteSuccess" class="modal-overlay">
    <div class="modal-content">
      <h4>Beverage deleted successfully.</h4>
      <div class="modal-buttons">
        <button @click="confirmDeleteSuccess" class="btn btn-primary">OK</button>
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
      currentAmount: this.amount,
      showConfirmModal: false, // Styr om modalen visas
      showDeleteSuccess: false, // Visar bekräftelse-modal efter radering
    };
  },
  methods: {
    async updateAmount(change) {
      const newAmount = this.currentAmount + change;
      if (newAmount < 0) {
        return;
      }
      try {
        const response = await fetch(`/api/beverages/${this.id}`, {
          method: "PUT",
          body: JSON.stringify({ shelf_amount: newAmount }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          this.currentAmount = newAmount;
        }
      } catch (error) {
        console.error("Error updating amount:", error);
      }
    },
    confirmDelete() {
      this.showConfirmModal = true;
    },
    async deleteBeverage() {
      try {
        const response = await fetch(`/api/beverages/${this.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          this.showDeleteSuccess = true;
        } else {
          console.error("Failed to delete beverage");
        }
      } catch (error) {
        console.error("Error deleting beverage:", error);
      } finally {
        this.showConfirmModal = false;
      }
    },
    confirmDeleteSuccess() {
      this.showDeleteSuccess = false;
      this.$router.back(); // Navigera tillbaka till föregående sida
    }
  }
}
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

/* Stil för modalen */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-buttons {
  margin-top: 10px;
}

.modal-buttons button {
  margin: 5px;
}
</style>
