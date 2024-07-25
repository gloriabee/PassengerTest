<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import type { Passenger } from '@/types'
import { ref, onMounted, computed, defineProps } from 'vue'
import PassengerService from '@/services/PassengerService'
const passengers = ref<Passenger[] | null>(null)

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)

onMounted(() => {
  PassengerService.getPassengers(2, page.value)
    .then((response) => {
      passengers.value = response.data.data.slice(2)
      // console.log(response.data.data.slice(0, 2))
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h2>Passenger Names</h2>
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>
</template>

<style scoped>
.passengers {
  display: flex;
  align-items: center;
  flex-direction: column;
}
h2 {
  text-align: center;
  color: rgb(12, 118, 4);
}
</style>
