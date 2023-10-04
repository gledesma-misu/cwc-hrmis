<template>
  <div class="menu" :style="{ width: sidebarWidth }" :class="{ 'small-menu': smallMenu }">
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    
  </div>
  <i @click="toggleMenu" class="spandd fas fa-bars">menu</i>
</template>

<script>
import MenuItem from "./MenuItem.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  name: "recursive-menu",
  data() {
    return {
      smallMenu: false,
      menuTree: [
        {
          label: "Settings",
          icon: "settings",
        },
        {
          label: "Dashboard",
          icon: "fa-window-maximize",
          children: [
            {
              label: "level 2.1",
            },
            {
              label: "level 2.2",
            },
            {
              label: "level 2.3",
            },
          ],
        },
        {
          label: "Settings",
          icon: "settings",
        },
      ],
    };
  },
  components: {
    MenuItem,
  },
  methods: {
    toggleMenu() {
      this.smallMenu = !this.smallMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 300px;
  left: 0;
  top: 0;
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  i {
    position: fixed;
    left: 250px;
    font-size: 20px;
    top: 15px;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 50px;
    i {
      left: 20px;
    }
  }
}

</style>
