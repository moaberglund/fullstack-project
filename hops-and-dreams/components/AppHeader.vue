<template>
  <header>
    <h1>Inventory</h1>
    <input type="text" placeholder="  Search for products" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  border-radius: 0 0 25px 25px;
}
header {
  background-color: #fff9ef;
  padding: 1em;
}

input {
  padding: 1em;
  border-radius: 25px;
  background-color: #ededed;
}
</style>