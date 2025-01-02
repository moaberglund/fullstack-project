<template>
  <section>
    <div>
      <!-- Logotype -->
      <div id="logotype">
        <NuxtImg src="/logo-clear.png" alt="Hops and Dreams Logotype" />
      </div>

      <LoginForm />
    </div>
  </section>
</template>
<script>
definePageMeta({
  layout: "login",
});
export default {};
</script>

<style scoped>
/* Centrera hela div#logotype */
#logotype {
  display: flex; /* Aktivera flexbox */
  justify-content: center; /* Horisontell centrering */
  align-items: center; /* Vertikal centrering */
}

/* För att säkerställa att bilden inte blir för stor */
#logotype img {
  max-width: 100%; /* Anpassar bredden så att den inte överskrider föräldraelementet */
  max-height: 100%; /* Anpassar höjden så att den inte överskrider föräldraelementet */
}
</style>