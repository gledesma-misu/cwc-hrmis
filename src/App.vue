<template>
  <div>
    <RouterView/>
  </div>
</template>

<script>
import { ref } from 'vue';
import Sidebar from './components/Sidebar/Sidebar.vue'
import Login from "./components/UserLogin.vue";
// import Login from './views/UserLoginView.vue'

export default {
  data() {
    return {
      authenticated: false,
    };
  },
  created() {
    // Check if the user is already authenticated (e.g., by checking a token in local storage)
    // You can replace this with your actual authentication logic
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      this.authenticated = true;
    }
  },
};
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
