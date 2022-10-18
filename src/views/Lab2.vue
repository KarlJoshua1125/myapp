<template>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="primary"
      >
        <v-tab value="one">Vowel Counter</v-tab>
        <v-tab value="two">Number Counter</v-tab>
        <v-tab value="three">Consonant Counter</v-tab>
        <v-tab value="four">Vowel Converter</v-tab>
        <v-tab value="five">String To Upper</v-tab>
        <v-tab value="six">Consonant Converter</v-tab>
        <v-tab value="seven">Vuetify</v-tab>
        <v-tab value="eight">Composition API</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <vowelc/>
          </v-window-item>
          <v-window-item value="two">
            <numberc/>
           
          </v-window-item>
  
          <v-window-item value="three">
            <consonantc/>
           
          </v-window-item>
        
  
          <v-window-item value="four">
            <vowelcon/>
           
          </v-window-item>

          <v-window-item value="five">
            <stringup/>
           
          </v-window-item>

          <v-window-item value="six">
            <conscon/>
           
          </v-window-item>

          <v-window-item value="seven">
            <vuetify/>
           
          </v-window-item>

          <v-window-item value="eight">
            <comapi/>
           
          </v-window-item>
  
  
  
        </v-window>
      </v-card-text>
    </v-card>
  </template>
  <script>
    export default {
    components: { vowelc },
      data: () => ({
        tab: null,
      }),
    }
  </script>
  
  <script setup>
  import vowelc from '@/views/vowelcount.vue';
  import numberc from '@/views/numbercount.vue';
  import consonantc from '@/views/consonantcount.vue';
  import vowelcon from '@/views/vowelconvert.vue';
  import stringup from '@/views/stringupper.vue';
  import conscon from '@/views/conscon.vue';
  import vuetify from '@/views/vuetify.vue';
  import comapi from '@/views/composition.vue';
 
  
  
  </script>