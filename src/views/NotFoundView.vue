<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page'
  }
)
</script>

<template>
  <div>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here</h3>
    <RouterLink :to="{ name: 'home' }">Back to the home page</RouterLink>
  </div>
</template>

<style scoped></style>
