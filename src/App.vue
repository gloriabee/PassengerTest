<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'

// set up size of each page
const pageSize = ref(10)
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div id="layout">
    <header>
      <!--flash message-->
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>

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

@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 5s ease-in-out;
}
</style>
