<template>
  <div>
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <RouterView />
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import Sidebar from './components/Sidebar/Sidebar.vue'
// import Login from "./components/UserLogin.vue";
import Login from './views/UserLoginView.vue'

export default {
  components: {
    Sidebar,
    Login
  },
  data() {
    return {
      loggedIn: false
    };
  }


};
</script>
<script setup>
import { sidebarWidth } from './components/Sidebar/state';
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

main {
  display: flex;
}
</style>
