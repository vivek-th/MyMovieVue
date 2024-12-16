<template>
    <body>
      <form @submit.prevent="handleRegister" id="registerForm">
        <h2 class="formHeader">Register</h2>
        <input 
          type="text" 
          v-model="name" 
          placeholder="Name" 
          required 
        />
        <input 
          type="text" 
          v-model="username" 
          placeholder="Username" 
          required 
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Password" 
          required 
        />
        <input 
          type="password" 
          v-model="confirmPassword" 
          placeholder="Confirm Password" 
          required 
        />
        <button type="submit" class="loginButton">Register</button>
        <router-link to="/login">Go to Login</router-link>
      </form>
    </body>
  </template>
  
  <script >
  export default {
    data() {
      return {
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
  
        const user = {
          name: this.name,
          username: this.username,
          password: this.password,
        };
  
        localStorage.setItem(this.username, JSON.stringify(user));
        alert("Registration successful! Please login.");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(./movieBg.jpg);
  height: 100vh;
 
}
form {
  width: 500px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--secondary-color);
  
}
input {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
}
.formHeader{
   color: var(--primary-color);
   font-weight: bold;
   text-align: center;
   font-size: 30px;
}
.loginButton{
    background-color:var(--primary-color);
    color: var(--secondary-color);
    border-radius: 25px;
    font-size:medium;
    width: 100px;
    height: 30px;
    justify-content: left;
    margin: 10px;
}
  </style>
  