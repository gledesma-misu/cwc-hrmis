<template>
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
        <div class="content">
            <Header>
                <div class="container">
                    ASd
                </div>
                </Header>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

import Sidebar from '../components/Sidebar/Sidebar.vue'
import Header from '../components/Header/Header.vue'
import { sidebarWidth } from '../components/Sidebar/state'
</script>

<style lang="scss" scoped></style>