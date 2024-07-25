<script setup lang="ts">
import { toRefs, defineProps } from 'vue'

import { type Passenger } from '@/types'

const props = defineProps<{
  passenger: Passenger
  id: String
}>()

const { passenger } = toRefs(props)
</script>

<template>
  <h4>Name: {{ passenger.name }}</h4>
  <p>Trips: {{ passenger.trips }}</p>
</template>

<style scoped></style>
