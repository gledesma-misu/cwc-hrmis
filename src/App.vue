<template>
  <!-- <Login></Login>
  <Login v-if="isLoggedIn"> -->
  <Sidebar />
  <div class="content" :style="{ 'margin-left': sidebarWidth }">
    <RouterView />
  </div>
 <!-- </Login> -->
</template>

<script>


import Sidebar from "./components/Sidebar/Sidebar.vue";
// import Login from "./components/UserLogin.vue";
import Login from "./views/UserLoginView.vue";

export default {
  props: {
    ifLoggedIn: Boolean // Prop to determine if user is logged in
  },
  components: {
    Sidebar,
    Login,
  },
  data() {
    return {
      
    };
  },
};
</script>
<script setup>
import { sidebarWidth } from "./components/Sidebar/state";

</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  position: relative;
}

main {
  display: flex;
}
.content{
  transition: 0.3s linear;
}
</style>
