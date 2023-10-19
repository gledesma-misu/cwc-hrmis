<template>
  <div>
    <h1>Payroll</h1>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<style lang="scss" scoped>
</style>