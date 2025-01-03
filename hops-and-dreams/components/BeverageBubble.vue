<template>
  <div class="beverage-bubble">
    <div class="beverage-img"></div>

    <div class="beverage-text">
      <h1>{{ name }}</h1>

      <!-- if vegan + organic ? -->

      <h2>{{ producer }}, {{ year }}</h2>

      <h3>{{ country }}, {{ region }}</h3>
      <h3>{{ volume }} - {{ alcohol_by_volume }}</h3>

      <p class="price">&euro;{{ price }}</p>

      <p class="description">{{ description }}</p>

      <p class="shelf">Shelf: {{ shelf_id }}</p>

      <p>Amount:</p>
      <div class="amount">
        <button>-</button>
        <p>{{ amount }}</p>
        <button>+</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 600px;
  background-color: #f0f0f0;
  border-radius: 25px;
  margin: 20px;
}

.beverage-img {
  width: 100%;
  height: 280px;
  background-color: #c06363;
  border-radius: 20px;
}

h1 {
  font-size: 20px;
}
h2 {
  font-size: 16px;
  color: #5a5a5a;
}
h3 {
  font-size: 12px;
  color: #5a5a5a;
}
.price {
  font-size: 20px;
}
.description {
  font-size: 14px;
  color: #5a5a5a;
}
.shelf {
  font-size: 12px;
  color: #5a5a5a;
}
.amount {
  font-size: 20px;
  background-color: #d9d9d9;
  width: 150px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>