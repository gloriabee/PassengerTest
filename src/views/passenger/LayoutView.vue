<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'passenger-detail-view' }">Passenger Details</RouterLink>
      |
      <RouterLink :to="{ name: 'airline-detail-view' }">Airline Details</RouterLink>
    </nav>
    <RouterView :passenger="passenger" />
  </div>
</template>

<style scoped></style>
