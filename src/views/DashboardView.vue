<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from '../components/Sidebar/Sidebar.vue'
import {sidebarWidth } from '../components/Sidebar/state'
</script>

<style lang="scss" scoped></style>