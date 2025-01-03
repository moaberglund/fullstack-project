<template>
  <header>
    <div class="container">
      <h1>Inventory</h1>
      <div class="input-wrapper">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search for products" />
      </div>
    </div>
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
  background-color: #fff9ef;
  padding: 1em;
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
  left: 10px; 
  transform: translateY(-50%);
  color: #888; /* Färg på ikonen */
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
  color: #aaa; /* Färg på placeholder-text */
}
</style>
