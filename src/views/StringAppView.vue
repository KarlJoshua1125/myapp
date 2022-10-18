<template >
  <div class="d-flex justify-center mb-6">
    <v-card class="pa-15" max-width="544" color="#EAE6E7">
      <v-card-title> String Manipulator </v-card-title>

      <v-text-field label="Enter a String" v-model="input1"></v-text-field>

      <v-card-actions>
        <v-btn color="primary" @click="doCountVowel"> Submit </v-btn>
      </v-card-actions>

      <h3>Vowels:</h3>
      {{ output1 }}
      <h3>Uppercase:</h3>
      {{ output2 }}
      <h3>Vowel to *:</h3>
      {{ output3 }}
      <h3>Consonants to Uppercase:</h3>
      {{ output4 }}
    </v-card>
  </div>
</template>


<script setup>
import { ref } from "vue";
const input1 = ref("");
const output1 = ref(0);
const output2 = ref("--");
const output3 = ref("--");
const output4 = ref("--");

function doCountVowel() {
  output1.value = input1.value.match(/[aeiou]/gi).length;
  output2.value = input1.value.toUpperCase();
  output3.value = input1.value.replace(/[aeiou]/gi, "*");
  output4.value = input1.value.toUpperCase().match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi);
}
</script>
