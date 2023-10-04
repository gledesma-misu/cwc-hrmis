<template>
  <transition name="dropdown-content">
    <div v-if="active" class="d-content bg-white py-2 collapse-inner rounded">
      <slot />
    </div>
  </transition>
</template>
  
  <script>
export default {
  name: "DropdownContent",
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>
<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.d-content {
  width: 100%;
  left: calc(100% + 6px);
  transition: height 0.3s ease;
  overflow: auto;
}
</style>
