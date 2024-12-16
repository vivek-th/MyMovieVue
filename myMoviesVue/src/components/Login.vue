<template>

    <body>
      <form @submit.prevent="handleLogin" id="loginForm">
        <div class="formHeader">Login</div>
        <input type="text" v-model="username" placeholder="Username" required />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button class="loginButton" type="submit">Login</button>
        <router-link to="/register">Go to Register</router-link>
      </form>
    </body>

</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const user = localStorage.getItem(this.username);
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === this.password) {
          localStorage.setItem("user", JSON.stringify(parsedUser));
          this.$router.push("/");
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("User not found");
      }
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
.formHeader {
  color: var(--primary-color);
  font-weight: bold;
  text-align: center;
  font-size: 30px;
}
.loginButton {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 25px;
  font-size: medium;
  width: 100px;
  height: 30px;
  margin: 10px;
  padding: 10px ;
}
.formHeader {
  font-size: 1.5em;
  margin-bottom: 1em;
}

input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  font-size: 1em;
  width: 100%;
}

.loginButton {
  background-color: #8c3030;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;
}

.loginButton:hover {
  background-color: #a84545;
}

a {
  display: block;
  margin-top: 1em;
  text-decoration: none;
  color: #8c3030;
}

a:hover {
  text-decoration: underline;
}
</style>
  