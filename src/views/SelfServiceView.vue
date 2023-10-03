<template>
  <Sidebar />
  <div id="content-wrapper" class="d-flex flex-column">
    <div class="content">
      <Header>
        <div class="container">
        </div>
      </Header>
    </div>
  </div>
</template>

<script >
import { RouterLink, RouterView } from "vue-router";

import Sidebar from "../components/Sidebar/Sidebar.vue";
import Header from "../components/Header/Header.vue";
import { sidebarWidth } from "../components/Sidebar/state";

export default {
  name: "SelfService",
};
</script>

<style lang="scss" scoped></style>