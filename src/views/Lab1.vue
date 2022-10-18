<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="primary"
    >
      <v-tab value="one">Personal Life</v-tab>
      <v-tab value="two">Programming Skills</v-tab>
      <v-tab value="four">About TIP</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <personallife/>
        </v-window-item>
        <v-window-item value="two">
          <progskill/>
        </v-window-item>

        <v-window-item value="four">
          <abouttip/>
        </v-window-item>



      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
  components: { personallife },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
import personallife from '@/views/personallife.vue';
import progskill from '@/views/programmingskill.vue';
import abouttip from '@/views/about.vue';



</script>