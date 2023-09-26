<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    
  </div>
</template>
  
<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import {sidebarWidth } from '../components/Sidebar/state'
</script>
  
<style lang="scss" scoped></style>