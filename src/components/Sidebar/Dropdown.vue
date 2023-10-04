<template>
  <div @click="toggle" v-click-away="away" class="link">
    <slot name="toggler"> </slot>
    <slot />
  </div>
</template>
  
  <script>
import { mixin as VueClickAway } from "vue3-click-away";
export default {
  name: "Dropdown",
  mixins: [VueClickAway],
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
    away() {
      this.sharedState.active = false;
    },
  },
};
</script>
<style>
.link {
  display: inline-block;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link:active {
  background-color: var(--sidebar-item-active);
}
</style>