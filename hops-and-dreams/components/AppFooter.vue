<template>
  <footer class="bg-light rounded-top mt-auto">
    <div
      class="container d-flex justify-content-between align-items-center py-2"
    >
      <button @click="home" id="btn-home" class="btn btn-primary m-3">
        <i class="bi bi-house-door-fill"></i>
      </button>
      <button @click="back" id="btn-back" class="btn btn-secondary m-3">
        <i class="bi bi-backspace-fill"></i>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    home() {
      // Redirect the user to the home page
      this.$router.push("/");
    },
    back() {
      // Hämta den aktuella URL:en och dela upp den i delar
      const pathParts = this.$route.path.split("/");

      // Ta bort sista delen av URL:en
      pathParts.pop();

      // Kolla om vi redan är på startsidan
      if (pathParts.length > 1) {
        // Om vi inte är på startsidan, navigera upp ett steg
        const newPath = pathParts.join("/");
        this.$router.push(newPath);
      } else {
        // Om vi är på startsidan, gå tillbaka till startsidan
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
footer {
  height: 90px;
  border-radius: 25px 25px 0 0;
}

#btn-home {
  background-color: #26453e;
  border: #26453e;
}

#btn-home:hover {
  background-color: #a2b72c;
}
#btn-back {
  border: none;
}
</style>