<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h5>
            <span v-if="collapsed">
                <h1>C</h1>
            </span>
            <span v-else>CWC-HRMIS</span>
        </h5>

        <!-- <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink> -->
        <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
        <SidebarLink to="/publishment" icon="fa-solid fa-folder">Recruitment</SidebarLink>
        <!-- <SidebarLink to="/dashboard" icon="fa-solid fa-envelope">Personnel</SidebarLink>
        <SidebarLink to="/dashboard" icon="fa-solid fa-print">Reports</SidebarLink>
        <SidebarLink to="/dashboard" icon="fa-solid fa-calendar-week">Attendance</SidebarLink>
        <SidebarLink to="/dashboard" icon="fa-solid fa-circle-question">Download Manual</SidebarLink>
        <SidebarLink to="/dashboard" icon="fa-solid fa-address-card">Libraries</SidebarLink>
        <SidebarLink to="/dashboard" icon="fa-solid fa-lock">Access Control</SidebarLink>
        <SidebarLink to="/dashboard" icon="fa-solid fa-lock-open">Change Password</SidebarLink> -->

        <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>
  
<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'


export default {
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth }
    }
}

</script>
  
<style>
:root {
    --sidebar-bg-color: #17ACFD;
    --sidebar-item-hover: #055884;
    --sidebar-item-active: #003399;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.sidebar h1 {
    height: 2.5em;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.90em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.5s linear;
}
</style>
  