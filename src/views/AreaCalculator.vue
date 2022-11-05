<template>
  <div class="flex-column justify-center mb-6">
    <v-card class="pa-15" max-width="544" color="white">
      <v-card-title>Area Calculator</v-card-title>
      <p>1. Rectangle</p>
    
      <p>2. Square</p>
      
      <p>3. Circle</p>
     
      <p>4. Triangle</p>

      <br>

      <v-card-subtitle>Select Shape</v-card-subtitle>
      <v-text-field
      type="number"
      v-model.number="Choice"
    ></v-text-field>

    <div v-if="Choice === 1">
      <br /><br />
      <h1>Rectangle</h1>
      <v-text-field
        name="base"
        v-model.number="base"
        label="Base of Rectangle"
      ></v-text-field>
      <v-text-field
        name="height"
        v-model.number="height"
        label="Height of Rectangle"
      ></v-text-field>

      <v-btn @click="doRectangle" color="primary">Submit</v-btn>
      <br /><br />
      <h2><em>A = lw</em></h2>
      <p>Area of Rectangle:</p>
      {{ AreaOfRectangle }}
    </div>

    <div v-if="Choice === 2">
      <br /><br />
      <h1>Square</h1>
      <v-text-field
        name="side"
        v-model.number="side"
        label="Side of Square"
      ></v-text-field>

      <v-btn @click="doSquare" color="primary">Submit</v-btn>
      <br /><br />
      <h2><em>A = s<sup>2</sup></em></h2>
      <p>Area of Square:</p>
      {{ AreaOfSquare }}
    </div>

    <div v-if="Choice === 3">
      <br /><br />
      <h1>Circle</h1>
      <v-text-field
        name="radius"
        v-model.number="radius"
        label="Radius of Circle"
      ></v-text-field>

      <v-btn @click="doCircle" color="primary">Submit</v-btn>
      <br /><br />
      <h2><em>A = &Pi;r<sup>2</sup></em></h2>
      <p>Area of Circle:</p>
      {{ AreaOfCircle }}
    </div>

    <div v-if="Choice === 4">
      <br /><br />
      <h1>Triangle</h1>
      <v-text-field
        name="base"
        v-model.number="base"
        label="Enter the base of Triangle"
      ></v-text-field>
      <v-text-field
        name="height"
        v-model.number="height"
        label="Enter the height of Triangle"
      ></v-text-field>

      <v-btn @click="doTriangle" color="primary">Submit</v-btn>
      <br /><br />
      <h2><em>A = <sup>bh</sup>&frasl;<sub>2</sub></em></h2>
      <p>Area of Triangle:</p>
      {{ AreaOfTriangle }}
    </div>


    
    

     
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const AreaOfRectangle = ref(0);
const AreaOfSquare = ref(0);
const AreaOfCircle = ref(0);
const AreaOfTriangle = ref(0);
const base = ref(0);
const height = ref(0);
const radius = ref(0);
const side = ref(0);
const Choice = ref(false);

function doRectangle() {
  return (AreaOfRectangle.value = base.value * height.value);
}
function doSquare() {
  return (AreaOfSquare.value = side.value * side.value);
}
function doCircle() {
  return (AreaOfCircle.value = 3.1416 * (radius.value * radius.value));
}
function doTriangle() {
  return (AreaOfTriangle.value = (base.value * height.value) / 2);
}
</script>
    
  