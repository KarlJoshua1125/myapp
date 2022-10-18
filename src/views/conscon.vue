<template >
    <div class="justify-center mb-6">
      <v-card class="pa-15" max-width="544" color="#EAE6E7">
        <v-card-title> Consonant Converter </v-card-title>
  
        <v-text-field label="Enter a String" v-model="input1"></v-text-field>
  
        <v-card-actions>
          <v-btn color="primary" @click="doCountVowel"> Submit </v-btn>
        </v-card-actions>
  
        <h3>Consonants to Uppercase:</h3>
        {{ output4 }}
      </v-card>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from "vue";
  const input1 = ref("");
  const output4 = ref("--");
  
  function doCountVowel() {
    output4.value = input1.value.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi);
  }
  </script>
  