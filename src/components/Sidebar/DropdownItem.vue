<template>
  <router-link :to="to" class="link2" :class="{ active: isActive }">
    <slot />
  </router-link>
</template>
  
  <script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "DropdownItem",
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive };
  },
};
</script>
<style>
.link2 {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: black;
  text-decoration: none;
}

.link2:hover {
  background-color: var(--sidebar-item-hover);
}

.link2.active {
  background-color: var(--sidebar-item-active);
}

</style>
  