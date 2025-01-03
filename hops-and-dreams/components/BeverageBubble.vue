<template>
  <div class="card beverage-bubble mx-auto p-3 mt-3 mb-5">
    <div class="beverage-img bg-light rounded"></div>

    <div class="card-body beverage-text">
      <h1 class="card-title h4">{{ name }}</h1>

      <h2 class="h6 text-muted">{{ producer }}, {{ year }}</h2>

      <h3 class="h6 text-muted">{{ country }}, {{ region }}</h3>
      <h3 class="h6 text-muted">{{ volume }} ml - {{ alcohol_by_volume }}% vol.</h3>

      <p class="price h4">&euro;{{ price }}</p>

      <p class="description text-muted">{{ description }}</p>

      <p class="shelf text-muted">Shelf: {{ shelf_id }}</p>

      <div class="amount">
        <p class="m-0">Amount:</p>
        <div class="input-group amount">
          <button class="btn btn-outline-secondary">-</button>
          <p class="m-0 px-3 amount-btn">{{ amount }}</p>
          <button class="btn btn-outline-secondary">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script>
export default {
  name: "BeverageBubble",
  props: {
    name: String,
    producer: String,
    year: Number,
    country: String,
    region: String,
    volume: Number,
    alcohol_by_volume: Number,
    price: Number,
    description: String,
    shelf_id: Number,
    amount: Number,
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
h3 {
  font-size: 12px;
}
.description {
  font-size: 12px;
}

.amount-btn {
    padding-top: 5px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    font-size: 16px;
    font-weight: bold;
}


</style>