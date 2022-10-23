<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Karl Joshua </span>
        <span>Gonzales</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        router
        :to="item.path"
        :prepend-icon="item.icon"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import vuetify from "../plugins/vuetify";

const drawer = ref(false);

const items = ref([
  { title: "Laboratory 1", icon: "mdi-account", path: "/lab1" },
  { title: "Laboratory 2", icon: "mdi-account", path: "/lab2" },
  { title: "Calculator", icon: "mdi-calculator", path: "/calculator" },
  { title: "Area Calculator", icon: "mdi-puzzle", path: "/area" },
  { title: "Test Page", icon: "mdi-account", path: "/test" },
  { title: "Quiz App", icon: "mdi-account", path: "/quiz" },
  { title: "Astronomy", icon: "mdi-account", path: "/axios" },
]);

function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
</script>
