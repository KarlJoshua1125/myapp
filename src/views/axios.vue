<template>
  <div class="flex-column justify-center mb-6">
    <v-card class="pa-15" max-width="544" color="#EAE6E7">
      <h1>Astronomy</h1>
      <v-card-title> Location: </v-card-title>

      <v-list-item v-for="astro in covidData" :key="astro.data">
        <v-list-item>
          <p>Latitude: {{ astro.observer.location.latitude }}</p>
          <p>Longitude: {{ astro.observer.location.longitude }}</p>
        </v-list-item>
        <v-card-title> Dates: </v-card-title>

        <v-list-item>
          <p>From: {{ astro.dates.from }}</p>
          <p>To: {{ astro.dates.to }}</p>
        </v-list-item>
      </v-list-item>
    </v-card>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const covidData = ref([]);

async function getCovidData() {
  axios({
    method: "get",
    url: "https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus",
    params: {
      latitude: "33.775867",
      longitude: "-84.39733",
      from_date: "2017-12-20",
      to_date: "2017-12-21",
      elevation: "166",
      time: "12:00:00",
    },
    headers: {
      "X-RapidAPI-Key": "60f3c344f0msh2d09e6fd40809d5p100669jsn01a027b62d38",
      "X-RapidAPI-Host": "astronomy.p.rapidapi.com",
    },
  }).then((response) => {
    covidData.value = response.data;
    console.log(covidData.value);
  });
}

onMounted(async () => {
  await getCovidData();
});
</script>
  
  