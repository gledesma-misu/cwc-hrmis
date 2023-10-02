<template>

        <div class="sidebar" :style="{ width: sidebarWidth }">
            <h5 class="icon">
                <span v-if="collapsed">
                    <i class="fa-solid fa-bars"></i>
                </span>
                <div v-else> CWC-HRMIS</div>
            </h5>

            <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/selfservice" icon="fa-solid fa-folder">Self-service Menu</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/personnel" icon="fa-solid fa-envelope">Personnel</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/" icon="fa-solid fa-print">Reports</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/" icon="fa-solid fa-calendar-week">Attendance</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/" icon="fa-solid fa-circle-question">Download Manual</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/" icon="fa-solid fa-address-card">Libraries</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/" icon="fa-solid fa-lock">Access Control</SidebarLink>
            <hr class="hr hr-blurry" />
            <SidebarLink to="/" icon="fa-solid fa-lock-open">Change Password</SidebarLink>

            <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
                <i class="fas fa-angle-double-left" />
            </span>
        </div>

</template>
  
<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'


export default {

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

.sidebar icon {
    height: 2.5em;
}

.icon {
    padding-bottom: 10%;
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
  