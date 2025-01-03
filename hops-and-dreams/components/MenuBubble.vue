<template>

    <div class="menu-bubble">

        <div class="category-img" :style="{ backgroundColor: color }"></div>
        <div class="category-name">
            <h2>{{  category }}</h2>
        </div>
        
    </div>


</template>

<script>

export default {
    name: 'MenuBubble',
    props: {
        category: String,
        color: {
            type: String,
            default: '#c06363' // Standardfärg om ingen färg skickas in
        }
    }
}

</script>

<style scoped>

.menu-bubble {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 200px;
    background-color: #f0f0f0;
    margin: 10px;
    border-radius: 25px;
}

.category-img {
    width: 100px;
    height: 100px;
    background-color: #c06363;
    border-radius: 20%;
}

h2 {
    padding: 1em;
    font-size: 1.2em;;
}


</style>