<template>
  <div>
    <table v-for="movie in movies" :key="movie.id" class="movie">
      <a class="tableRow" @click="handlePopup(movie)">
        <tr>
          <td>
            <img :src="IMAGE_PATH + movie.poster_path" :alt="movie.title" />
          </td>
          <td>
            <h3>{{ movie.title }}</h3>
          </td>
          <td>
            <span :class="getClassesByRating(movie.vote_average)">
              {{ movie.vote_average }}
            </span>
          </td>
        </tr>
      </a>
    </table>

    <div v-if="isPopupVisible" class="popUpbox">
      <div class="popUp-box">
        <h2 class="popUpHeading">{{ popUpdata.title }}</h2>

        <hr />
        <p>{{ popUpdata.overview }}</p>
        <p><b>Language: </b>{{ popUpdata.original_language }}</p>
        <p><b>Popularity: </b>{{ popUpdata.popularity }}</p>
        <p><b>Release Date: </b>{{ popUpdata.release_date }}</p>
        <p><b>Vote Average: </b>{{ popUpdata.vote_average }}</p>
        <button @click="isPopupVisible = false">Close</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      popUpdata: {},
      IMAGE_PATH: "https://image.tmdb.org/t/p/w300/",
      isPopupVisible: false,
    };
  },

  methods: {
    getClassesByRating(rating) {
      if (rating >= 8) {
        return "green";
      } else if (rating >= 5) {
        return "orange";
      } else {
        return "red";
      }
    },

    handlePopup(movie) {
      this.popUpdata = movie;
      this.isPopupVisible = true;
    },
  },
};
</script>
  
  <style scoped>
body {
  background-color: var(--secondary-color);
  font-family: sans-serif;
  margin: 0;
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
table {
  width: 95%;
  border-collapse: collapse;
  margin: 20px 20px;
}

tr {
  display: flex;
  align-items: center;
  background: var(--tertiary-color);
  cursor: pointer;
}

td {
  flex: 1;
}

td img {
  display: block;
  margin: 0 auto;
  height: 55px;
  width: auto;
}
.popUpbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popUp-box {
  background-color: var(--secondary-color);
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.popUpHeading {
  color: var(--primary-color);
}
</style>
   