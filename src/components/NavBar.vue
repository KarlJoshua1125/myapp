<template>
  <nav>
    
    <v-toolbar app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Karl Joshua </span>
        <span>Gonzales</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <img class="logo" src="../assets/Karl.png" alt="Avatar">
      <v-card-title>Karl Joshua Gonzales</v-card-title>
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
import { useTheme } from 'vuetify'

const theme = useTheme()
const drawer = ref(false);

const items = ref([
  { title: "Laboratory 1", icon: "mdi-account", path: "/lab1" },
  { title: "Laboratory 2", icon: "mdi-account", path: "/lab2" },
  { title: "Calculator", icon: "mdi-calculator", path: "/calculator" },
  { title: "Area Calculator", icon: "mdi-puzzle", path: "/area" },
  { title: "Test Page", icon: "mdi-account", path: "/test" },
  { title: "Quiz App", icon: "mdi-account", path: "/quiz" },
  { title: "Astronomy", icon: "mdi-account", path: "/axios" },
  { title: "Todo App", icon: "mdi-account", path: "/todo" },

]);

function toggleDrawer() {
  return (drawer.value = !drawer.value);
}

function toggleTheme(){
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
} 
</script>

<style>
.logo{
  height: 100px;
  margin-left: 60px;
  margin-top: 20px;
  border-radius: 50%;
}
</style>

