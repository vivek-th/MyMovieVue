<template>
    <body>
        
    
    <div class="dashboard">
        
      <h2 class="dashboardHeading">User Dashboard</h2>
      <input 
        type="text" 
        v-model="updatedUser.name" 
        placeholder="Name" 
      />
      <input 
        type="text" 
        v-model="updatedUser.username" 
        placeholder="Username" 
        disabled 
      />
      <input 
        type="password" 
        v-model="updatedUser.password" 
        placeholder="Password" 
      />
      <button @click="updateDetails">Update Details</button>
      <router-link to="/" class="back-link">Back to Movies</router-link>
    </div>
</body>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "Dashboard",
    setup() {
      const user = JSON.parse(localStorage.getItem("user"));
      const updatedUser = ref({
        name: "",
        username: "",
        password: "",
      });
  
      onMounted(() => {
        if (user) {
          updatedUser.value.name = user.name;
          updatedUser.value.username = user.username;
          updatedUser.value.password = user.password;
        } else {
          alert("No user data found in local storage!");
        }
      });
  
      const updateDetails = () => {
        if (!updatedUser.value.name || !updatedUser.value.password) {
          alert("Name and Password cannot be empty!");
          return;
        }
  
        const updatedData = {
          ...updatedUser.value,
          username: user.username, // username remains unchanged
        };
  
        localStorage.setItem("user", JSON.stringify(updatedData));
        localStorage.setItem(user.username, JSON.stringify(updatedData));
  
        alert("Details updated successfully!");
      };
  
      return {
        updatedUser,
        updateDetails,
      };
    },
  };
  </script>
  
  <style scoped>

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(./movieBg.jpg);
    font-family: Arial, sans-serif;
  }
  .dashboard {
    width: 400px;
    padding: 20px;
    background-color: var(--secondary-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .dashboard input {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
  }
  .dashboard button {
    padding: 10px;
    width: 100%;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }
  .dashboard button:hover {
    background-color: var(--tertiary-color);
  }
  .dashboardHeading {
    color: var(--primary-color);
    text-align: center;
  }
  .back-link {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: var(--primary-color);
    text-decoration: underline;
    font-weight: bold;
  }
  </style>
  