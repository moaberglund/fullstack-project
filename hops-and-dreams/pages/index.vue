<template>
  <section>
    <div class="block container">
      <div class="row"></div>

      <div class="row">
        <div class="col-6 col-md-4 col-lg-3 mt-3" v-for="category in uniqueCategories" :key="category">
          <nuxt-link class="linkColor" :to="`/${category}`">
            <div class="card text-center p-2 shadow-sm">
              <!-- Dynamisk bakgrundsfärg och centrering -->
              <div class="rounded mx-auto mb-3" :style="{
                width: '100px',
                height: '100px',
                backgroundColor:
                  category === 'Wine'
                    ? '#f8d7da'
                    : category === 'Beer'
                      ? '#d4edda'
                      : category === 'Cider'
                        ? '#FAEDCB'
                        : category === 'Mixed Drinks'
                          ? '#D5C8E9'
                          : category === 'Spirits'
                            ? '#F8D9C4'
                            : '#cce5ff',
                display: 'flex', // Flexbox för att centrera
                justifyContent: 'center', // Horisontell centrering
                alignItems: 'center', // Vertikal centrering
              }">
                <!-- SVG för Wine -->
                <svg v-if="category === 'Wine'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                  :style="{ width: '50%', height: '50%', fill: '#721c24' }">
                  <path
                    d="M32.1 29.3C33.5 12.8 47.4 0 64 0L256 0c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6l0 99.6 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0-80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-99.6C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7l143.8 0-5.3-64L93.4 64l-5.3 64z" />
                </svg>

                <!-- SVG för Spirits -->
                <svg v-if="category === 'Spirits'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  :style="{ width: '50%', height: '50%', fill: '#bd5b1f' }">
                  <path
                    d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3 224 448l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-178.7L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0L32 0zM173.3 128l-64-64 293.5 0-64 64-165.5 0z" />
                </svg>

                <!-- SVG för Cider -->
                <svg v-if="category === 'Cider'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  :style="{ width: '50%', height: '50%', fill: '#ccb327' }">
                  <path
                    d="M224 112c-8.8 0-16-7.2-16-16l0-16c0-44.2 35.8-80 80-80l16 0c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80l-16 0zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z" />
                </svg>

                <!-- SVG för Non-alc -->
                <svg v-if="category === 'Non-alcoholic'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  :style="{ width: '50%', height: '50%', fill: '#2774cc' }">
                  <path
                    d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>

                <!-- SVG för Mixed -->
                <svg v-if="category === 'Mixed Drinks'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  :style="{ width: '50%', height: '50%', fill: '#8427cc' }">
                  <path
                    d="M368 80c-3.2 0-6.2 .4-8.9 1.3C340 86.8 313 91.9 284.8 84.6C227.4 69.7 160.2 92 110.1 142.1S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3c-.8 2.8-1.3 5.8-1.3 8.9c0 17.7 14.3 32 32 32c3.2 0 6.2-.4 8.9-1.3c19.1-5.5 46.1-10.7 74.3-3.3c57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3c.8-2.8 1.3-5.8 1.3-8.9c0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80c0 7.7-1.1 15.2-3.1 22.3c-4.6 15.8-7.1 32.9-3 48.9c20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3c-7.1 2-14.6 3.1-22.3 3.1c-44.2 0-80-35.8-80-80c0-7.7 1.1-15.2 3.1-22.3c4.6-15.8 7.1-32.9 3-48.9C-14 251.3 17 167.3 76.2 108.2S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3c7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7c-3.7 12.7-17.1 20-29.8 16.3s-20-17.1-16.3-29.8c19.8-67.7 76.6-124.5 144.3-144.3c12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z" />
                </svg>

                <!-- SVG för Beer -->
                <svg v-if="category === 'Beer'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  :style="{ width: '50%', height: '50%', fill: '#28a745' }">
                  <path
                    d="M32 64c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32 51.2 0c42.4 0 76.8 34.4 76.8 76.8l0 102.1c0 30.4-17.9 57.9-45.6 70.2L384 381.7l0 34.3c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64L32 64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7l0-102.1c0-7.1-5.7-12.8-12.8-12.8L384 160l0 151.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224z" />
                </svg>
              </div>
              <p>{{ category }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref, computed } from "vue";

export default {
  setup() {
    const beverages = ref([]);
    const uniqueCategories = computed(() => {
      const categories = beverages.value.map(
        (beverage) => beverage.category
      );
      return [...new Set(categories)];
    });

    const fetchBeverages = async () => {
      try {
        const response = await fetch("/api/beverages");
        const data = await response.json();
        beverages.value = data;
      } catch (error) {
        console.error("Error fetching beverages:", error);
      }
    };

    onMounted(() => {
      fetchBeverages();
    });

    return {
      uniqueCategories,
    };
  },
};
</script>

<style scoped>
.linkColor {
  color: #26453E;
  text-decoration: none;
}
</style>
