<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h5 class="icon">
      <span v-if="collapsed">
        <i class="fa-solid fa-bars "></i>
      </span>
      <div class="title" v-else>CWC-HRMIS</div>
    </h5>

    <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Recruitment</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Personnel</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Reports</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Attendance</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Download Manual</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Libraries</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/" icon="fas fa-columns">Access Control</SidebarLink>
    <hr class="hr hr-blurry" />
    <SidebarLink to="/login" icon="fas fa-columns">Logout</SidebarLink>
    <hr class="hr hr-blurry" />
  

   

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-circle-arrow-left fa-2xl" />
    </span>
  </div>
</template>
  
<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import AppDropdown from "./Dropdown.vue";
import AppDropdownContent from "./DropdownContent.vue";
import AppDropdownItem from "./DropdownItem.vue";

export default {
  components: { SidebarLink, AppDropdown, AppDropdownContent, AppDropdownItem },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>
  
<style>
:root {
  --sidebar-bg-color: #17acfd;
  --sidebar-item-hover: #055884;
  --sidebar-item-active: #003399;
}
</style>

<style scoped>
.sidebar {
  overflow: hidden;
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
  height: 50px;
}

.icon {
  padding: 10%;
  text-align:center;
}

.title{
  text-align:center;
}

.collapse-icon {
  position: absolute;
  padding: 0.9em;
 
  color: rgba(255, 255, 255, 0.7);
  bottom: 30%;
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.5s linear;
}
</style>
  