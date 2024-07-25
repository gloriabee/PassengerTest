<script setup lang="ts">
import { type Passenger } from '@/types'

defineProps<{
  passenger: Passenger
}>()

// const passenger = ref({
//   name: 'Gloria',
//   airline: 'MNA'
// })
</script>

<template>
  <div class="passenger-lists">
    <RouterLink class="link" :to="{ name: 'passenger-detail-view', params: { id: passenger._id } }">
      <div class="passenger-item">
        <p>{{ passenger.name }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.passenger-item {
  width: 200px;
  cursor: pointer;
  border-bottom: 1px solid #39495c;
  margin-bottom: 18px;
}

.link {
  text-decoration: none;
  color: #2c3e50;
  cursor: pointer;
}
</style>
