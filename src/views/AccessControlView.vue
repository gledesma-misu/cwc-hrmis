<template>
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
        <div class="container">
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar/Sidebar.vue'
import Navbar from '../components/NavBar/Navbar.vue'

export default {
    name: 'Recruitment Publishment',
    components: {
        Navbar,
        Sidebar,
    },
}
</script>

<style lang="scss" scoped></style>