<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

import { type Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'

const passenger = ref<Passenger | null>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  PassengerService.getPassenger(props.id)
    .then((response) => {
      passenger.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div v-if="passenger">
    <h4>Name: {{ passenger.name }}</h4>
    <p>Trips: {{ passenger.trips }}</p>
  </div>
</template>

<style scoped></style>
