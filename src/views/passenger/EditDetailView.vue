<script setup lang="ts">
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useMessageStore()
const edit = () => {
  store.updateMessage('update is in progress')

  setTimeout(() => {
    store.resetMessage()
  }, 5000)

  router.push({ name: 'home' })
}
</script>

<template>
  <p>Edit User Data</p>
  <button @click="edit">Edit</button>
</template>

<style scoped></style>
