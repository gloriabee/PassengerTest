<script setup lang="ts">
import { toRefs } from 'vue'
import { type Passenger } from '@/types'

const props = defineProps<{
  passenger: Passenger
  id: String
}>()

const { passenger } = toRefs(props)
</script>

<template>
  <div v-if="passenger">
    <div v-for="(airline, index) in passenger.airline" :key="index">
      <img :src="airline.logo" alt="logo" class="logo-img" /> <br />
      {{ airline.name }} ({{ airline.country }}) <br />
      {{ airline.slogan }} <br />

      {{ airline.established }} <br />
      {{ airline.website }}
    </div>
  </div>
</template>

<style scoped></style>
