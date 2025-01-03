<template>
  <h1>Test page</h1>

  <div class="flex-container">

    <MenuBubble category="Wine" />
    <MenuBubble category="Beer" color="#FFE600" />
    <MenuBubble category="Spirits" color="#02AEFF" />

  </div>

  <div class="flex-container">

    <BeverageBubble
      name="Chardonnay"
      producer="Chateau de Chardonnay"
      year="2019"
      country="France"
      region="Burgundy"
      volume="750ml"
      alcohol_by_volume="13%"
      price="199"
      description="A fruity and fresh wine with a hint of oak."
      shelf_id="1"
      amount="1"
    />

    <BeverageBubble
      name="IPA"
      producer="Brewery X"
      year="2021"
      country="Sweden"
      region="Stockholm"
      volume="330ml"
      alcohol_by_volume="6%"
      price="49"
      description="A hoppy and bitter beer with a citrusy aroma."
      shelf_id="2"
      amount="1"
    />

    <BeverageBubble
      name="Gin"
      producer="Distillery Y"
      year="2020"
      country="England"
      region="London"
      volume="700ml"
      alcohol_by_volume="40%"
      price="299"
      description="A classic gin with juniper and citrus notes."
      shelf_id="3"
      amount="1"
    />
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