<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// set up size of each page
const pageSize = ref(6)
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <!-- <RouterLink to="/">Passengers</RouterLink> |
          <RouterLink to="/about">About</RouterLink> -->
          <RouterLink :to="{ name: 'home', query: { pageSize: pageSize } }">Passengers</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#layout {
  font-family: Avenir, Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscalse;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 8px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
