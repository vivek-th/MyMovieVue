<template>
  <div>
    <header>
      <div class="app-name">Movie App</div>
      <form @submit.prevent="handleSearch" id="form">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search..." 
          class="search" 
        />  
      </form>
      <div class="header-buttons" v-if="isLoggedIn">
        <button id="logoutButton" @click="logout">
          <span class="icon">🔒</span> Logout
        </button>
        <button id="dashboardLink">
          <span class="icon">🏠</span>
          <router-link to="dashboard">Dashboard</router-link>
        </button>
      </div>
    </header>

    <div id="welcomeMessage" v-html="welcomeMessage"></div>

    <main id="main">
      <div 
        v-for="movie in movies" 
        :key="movie.id" 
        class="movie"
      >
        <img :src="IMAGE_PATH + movie.poster_path" :alt="movie.title" />
        <div class="movie-info">
          <h3>{{ movie.title }}</h3>
          <span :class="getClassesByRating(movie.vote_average)">
            {{ movie.vote_average }}
          </span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      searchQuery: "",
      isLoggedIn: false,
      IMAGE_PATH: "https://image.tmdb.org/t/p/w300/",
      SEARCH_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=36b8863b396c558efb94367639136716&query=",
      API_URL:
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=36b8863b396c558efb94367639136716",
    };
  },
  computed: {
    welcomeMessage() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user
        ? `Hello ${user.name}, Hunt your fav movies!`
        : `Hello User, please <a href="/login">login</a>`;
    },
  },
  methods: {
    async getMovies(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.movies = data.results;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
    getClassesByRating(rating) {
      if (rating >= 8) {
        return "green";
      } else if (rating >= 5) {
        return "orange";
      } else {
        return "red";
      }
    },
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.getMovies(this.SEARCH_URL + this.searchQuery);
        this.searchQuery = "";
      } else {
        this.getMovies(this.API_URL);
      }
    },
    logout() {
      localStorage.removeItem("user");
      this.isLoggedIn = false;
      window.location.href = "/login";
    },
  },
  mounted() {
    this.getMovies(this.API_URL);
    const user = localStorage.getItem("user");
    if (user) {
      this.isLoggedIn = true;
    }
  },
};
</script>

<style>

* {
  box-sizing: border-box;
}
body {
  background-color: var(--secondary-color);
  font-family: sans-serif;
  margin: 0;
}
main {
  display: flex;
  flex-wrap: wrap;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-bottom: 5px solid var(--tertiary-color);
}
.app-name {
  font-size: 1.5em;
  font-weight: bold;
}
#form {
  display: flex;
}
.search {
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  border-radius: 50px;
  font-size: 1rem;
  padding: 1rem;
  color: var(--secondary-color);
}
.search::placeholder {
  color: var(--secondary-color);
}
.search:focus {
  outline: var(--tertiary-color);
}
.header-buttons {
  display: flex;
  gap: 10px;
}
#logoutButton,
#dashboardLink {
  background-color: var(--secondary-color);
  border-radius: 25px;
  color: var(--primary-color);
  font-size: medium;
  font-weight: 500;
  padding: 8px 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}
#logoutButton:hover,
#dashboardLink:hover {
  background-color: #e9877e;
}
#dashboardLink a {
  text-decoration: none;
  color: var(--primary-color);
}
#welcomeMessage {
  text-align: center;
  margin: 20px 0;
  color: var(--primary-color);
  font-size: 1.5rem;
}
.movie {
  width: 300px;
  margin: 1rem;
  background-color: var(--primary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
}
.movie img {
  width: 100%;
}
.movie-info {
  color: #f2dcdc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 1px;
}
.movie-info span {
  background-color: var(--tertiary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
}
.movie-info span.green {
  background-color: green;
}
.movie-info span.orange {
  background-color: orange;
}
.movie-info span.red {
  background-color: red;
}
.overview {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: medium;
  max-height: 90%;
  transform: translateY(101%);
  transition: transform 0.3s ease;
}
.movie:hover .overview {
  transform: translateY(0);
}
</style>
 