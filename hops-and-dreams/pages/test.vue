<template>
  <h1>Test page</h1>

  <div class="flex-container">

    <MenuBubble category="Wine" />
    <MenuBubble category="Beer" color="#FFE600" />
    <MenuBubble category="Spirits" color="#02AEFF" />

  </div>

</template>

<script>
</script>

<style scoped>
h1 {
    text-align: center;
}

.flex-container {
  display: flex;
  justify-content: center;
}

</style>