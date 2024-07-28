<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Passenger } from '@/types'
import PassengerService from '@/services/PassengerService'
import { useRouter } from 'vue-router'

const passenger = ref<Passenger | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const router = useRouter()

onMounted(() => {
  PassengerService.getPassenger(props.id)
    .then((response) => {
      passenger.value = response.data
    })
    .catch((error) => {
      console.error('API Error:', error)
      router.push({
        name: '404-resource-view',
        params: { resource: 'passenger' }
      })
    })
})
</script>
<template>
  <div v-if="passenger">
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'passenger-detail-view' }">Passenger Details</RouterLink>
      |
      <RouterLink :to="{ name: 'passenger-edit-view' }">Edit</RouterLink>
      |
      <RouterLink :to="{ name: 'airline-detail-view' }">Airline Details</RouterLink>
    </nav>
    <RouterView :passenger="passenger" />
  </div>
</template>
