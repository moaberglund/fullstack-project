<template>
  <div :style="{ backgroundColor: color }">
    <p>{{ cert }}</p>
  </div>
</template>

<script>
export default {
  name: "CertBubble",
  props: {
    cert: String,
    color: {
      type: String,
      default: "#0dbd33", // Standardfärg om ingen färg skickas in
    },
  },
};
</script>

<style scoped>
div {
  width: 45px;
  height: 45px;
  background-color: #0dbd33;
  border-radius: 50%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin-right: 1em;
}

p {
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin: 0;
}
</style>