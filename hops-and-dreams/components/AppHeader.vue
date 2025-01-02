<template>
<header>
<h1>Inventory</h1>
<input type="text" placeholder="  Search for products">

 <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />

</header>
</template>

<script>

export default {
name: "Header",


};
</script>

<style scoped>
header {
background-color: #FFF9EF;
padding: 1em;
}

input {
padding: 1em;
border-radius: 25px;
background-color: #EDEDED;
}
</style>