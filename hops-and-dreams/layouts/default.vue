<template>
    <div v-if="isAuthenticated">
        <AppHeader />
        <NuxtPage />
        <DialogWrapper />
        <AppFooter />
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { DialogWrapper } from "vue3-promise-dialog";

const router = useRouter();
const isAuthenticated = ref(null); // Use null to distinguish between loading and not authenticated

onMounted(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
        isAuthenticated.value = true;
    } else {
        isAuthenticated.value = false;
        router.push("/login");
    }
});
</script>

<style scoped>
</style>