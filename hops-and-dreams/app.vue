<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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

<style>
@import url("~/assets/css/normalize.css");
@import url("~/assets/css/main.css");
</style>