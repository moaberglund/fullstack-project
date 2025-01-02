<template>
    <div>
        <NuxtPage />
        <DialogWrapper />
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { DialogWrapper } from "vue3-promise-dialog";
const router = useRouter();
const navigateToRoute = (route) => {
    router.push(route);
};
</script>

<style scoped>
div {
    background-color: #FFF9EF;
    height: 100vh;
}

</style>