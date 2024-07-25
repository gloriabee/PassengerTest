<script setup lang="ts">
import PassengerCard from '@/components/PassengerCard.vue'
import { type Passenger } from '@/types'
import { ref, onMounted, computed, defineProps, watchEffect } from 'vue'
import PassengerService from '@/services/PassengerService'
const passengers = ref<Passenger[] | null>(null)
const totalPassengers = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalPassengers.value / pageSize.value)
  return page.value < totalPages
})

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)

onMounted(() => {
  watchEffect(() => {
    passengers.value = null
    PassengerService.getPassengers(pageSize.value, page.value)
      .then((response) => {
        const startIndex = (page.value - 1) * pageSize.value
        const endIndex = startIndex + pageSize.value
        passengers.value = response.data.data.slice(startIndex, endIndex)
        totalPassengers.value = response.data.totalPassengers
        // console.log(response.data.totalPassengers)
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h2>Passenger Names</h2>
  <div class="passengers">
    <PassengerCard v-for="passenger in passengers" :key="passenger._id" :passenger="passenger" />
  </div>

  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'home', query: { page: page - 1, pageSize: pageSize } }"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Prev Page
    </RouterLink>

    <RouterLink
      id="page-next"
      :to="{ name: 'home', query: { page: page + 1, pageSize: pageSize } }"
      rel="next"
      v-if="hasNextPage"
    >
      Next Page &#62;
    </RouterLink>
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

.pagination {
  margin: auto;
  display: flex;
  width: 290px;
}

.pagination a {
  padding: 8px;
  margin: 0 12px;
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev,
#page-next {
  text-align: center;
  background-color: aquamarine;
}
</style>
