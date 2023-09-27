<template>
    <div class="login-container">
      <h2>CWC-HRMIS</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-actions">
          <button type="submit" class="login-button">Login</button>
          <button type="button" class="register-button" @click="goToRegistration">Register</button>
        </div>
      </form>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      login() {
        // Check if the username and password match the hardcoded values
        if (this.username === "admin" && this.password === "admin") {
          // Successful login, navigate to the dashboard
          this.errorMessage = "";
          this.$router.push('/dashboard'); // Use Vue Router to navigate
        } else {
          // Incorrect username or password
          this.errorMessage = "Incorrect username or password";
        }
      },
      goToRegistration() {
        // Implement the logic to navigate to the registration page
        // For this example, let's assume you have a '/registration' route
        this.$router.push('/registration');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .form-actions {
    text-align: center;
  }
  
  .login-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .register-button {
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .error {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  