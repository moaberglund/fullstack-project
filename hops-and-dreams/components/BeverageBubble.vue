<template>

    <div class="begerage-bubble">

        <div class="beverage-img"></div>

        <h1>{{name}}</h1>

        <!-- if vegan + organic ? -->

        <h2>{{producer}}  {{year}}</h2>

        <h3>{{country}} {{region}}</h3>
        <h3>{{volume}} {{alcohol_by_volume}}</h3>

        <p class="price">{{price}}</p>

        <p class="description">{{description}}</p>

        <p>Shelf: {{shelf_id}}</p>

        <p>Amount:</p>
        <div class="amount">
            <button>-</button>
            <p>{{amount}}</p>
            <button>+</button>
        </div>

    </div>

</template>

<script>

export default {
    name: 'BeverageBubble',
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
        amount: Number
    }
}

</script>