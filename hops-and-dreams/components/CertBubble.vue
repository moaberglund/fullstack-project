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
  width: 35px;
  height: 35px;
  background-color: #0dbd33;
  border-radius: 50%;
}

p {
  color: white;
  text-transform: uppercase;
  font-weight: 400;
}
</style>